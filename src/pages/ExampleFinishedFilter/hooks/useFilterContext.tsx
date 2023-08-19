import { createContext, useContext, useMemo } from "react";
import { useFilter } from "./useFilter";
import {
  Item,
  Filter,
  SearchFilter,
  CategoryFilters,
  RangeFilters,
} from "../types";

type FilterContextType =
  | (ReturnType<typeof useFilter> & { filterResults: Item[] })
  | null;

const FilterContext = createContext<FilterContextType>(null);

type FilterContextProviderProps = {
  children: React.ReactNode;
  items: Item[];
};

export function FilterContextProvider({
  children,
  items,
}: FilterContextProviderProps) {
  const initialFilterOptions = useMemo(
    () => extractFilterOptionsFromItems(items),
    [items]
  );

  const { filters, updateCategory, updateRange, updateSearch, reset } =
    useFilter(initialFilterOptions);

  // potential performance optimiziations for huge lists of items.
  // comes at the cost of a second re-render:
  // const defferedFilters = useDeferredValue(filters);

  const filterResults = useMemo(() => {
    return filterItems(items, filters);
  }, [items, filters]);

  return (
    <FilterContext.Provider
      value={{
        filterResults,
        filters,
        reset,
        updateCategory,
        updateRange,
        updateSearch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error(
      "useFilterContext must be used within a FilterContextProvider"
    );
  }

  return context;
}

function filterItems(items: Item[], filter: Filter) {
  let filteredItems = items;

  if (filter.search.value) {
    filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(filter.search.value.toLowerCase())
    );
  }

  for (const key in filter.categories) {
    if (filteredItems.length === 0) {
      return filteredItems;
    }

    if (filter.categories[key].options.every((option) => !option.value)) {
      continue;
    }

    filteredItems = items.filter((item) =>
      filter.categories[key].options.find((option) => {
        if (!option.value) {
          return false;
        }

        const comparision = item.categories[key];
        if (Array.isArray(comparision)) {
          return comparision.includes(option.id);
        } else if (typeof comparision === "string") {
          return comparision === option.id;
        }

        return false;
      })
    );
  }

  for (const key in filter.ranges) {
    if (filteredItems.length === 0) {
      return filteredItems;
    }

    filteredItems = filteredItems.filter((item) => {
      return item.ranges[key] <= filter.ranges[key].value;
    });
  }

  return filteredItems;
}

function extractFilterOptionsFromItems(items: Item[]) {
  const search: SearchFilter = { value: "" };
  const categories: CategoryFilters = {};
  const ranges: RangeFilters = {};

  function handleCategory(
    categoryId: string,
    categoryValue: string | string[]
  ) {
    if (!(categoryId in categories)) {
      categories[categoryId] = {
        options: [],
      };
    }

    if (Array.isArray(categoryValue)) {
      for (const optionId of categoryValue) {
        handleOption(categoryId, optionId);
      }
    } else if (typeof categoryValue === "string") {
      handleOption(categoryId, categoryValue);
    }
  }

  function handleOption(categoryId: string, optionId: string) {
    if (
      !categories[categoryId].options.some((option) => option.id === optionId)
    ) {
      categories[categoryId].options.push({
        id: optionId,
        value: false,
      });
    }
  }

  function handleRange(rangeId: string, rangeValue: number) {
    if (!(rangeId in ranges)) {
      ranges[rangeId] = { min: 0, max: 0, value: 0 };
    }

    if (rangeValue < ranges[rangeId].min) {
      ranges[rangeId].min = rangeValue;
    }

    if (rangeValue > ranges[rangeId].max) {
      ranges[rangeId].max = rangeValue;
      ranges[rangeId].value = rangeValue;
    }
  }

  for (const item of items) {
    for (const categoryId in item.categories) {
      handleCategory(categoryId, item.categories[categoryId]);
    }

    for (const rangekey in item.ranges) {
      handleRange(rangekey, item.ranges[rangekey]);
    }
  }

  return {
    search,
    categories,
    ranges,
  };
}
