import { createContext, useContext, useMemo } from "react";
import { Item, TFilter } from "../filter.types";
import { useFilter } from "./useFilter";
import { extractFilterOptionsFromDataset } from "../shared/functions";

type FilterContext = {
  filters: TFilter;
  filterResults: Item[];
  updateCategory: (id: string, optionid: string, value: boolean) => void;
  updateRange: (id: string, value: number) => void;
  updateSearch: (value: string) => void;
  reset: () => void;
};

export const FilterContext = createContext<FilterContext | null>(null);

type FilterContextProviderProps = {
  children: React.ReactNode;
  items: Item[];
};

export function FilterContextProvider({
  children,
  items,
}: FilterContextProviderProps) {
  const filterOptions = extractFilterOptionsFromDataset(items);
  const { filters, updateCategory, updateRange, updateSearch, reset } =
    useFilter(filterOptions);

  const filterResults = useMemo(() => {
    let filtereditems = items;

    if (filters.search.value) {
      filtereditems = items.filter((item) =>
        item.name.toLowerCase().includes(filters.search.value.toLowerCase())
      );
    }

    for (const key in filters.categories) {
      if (filtereditems.length === 0) {
        return filtereditems;
      }

      if (filters.categories[key].options.every((option) => !option.value)) {
        continue;
      }

      filtereditems = items.filter((item) =>
        filters.categories[key].options.find((option) => {
          const comparision = item.categories[key];
          if (Array.isArray(comparision)) {
            return option.value && comparision.includes(option.id);
          } else if (typeof comparision === "string") {
            console.log(comparision, option.id);
            return option.value && comparision === option.id;
          }

          return false;
        })
      );
    }

    for (const key in filters.ranges) {
      if (filtereditems.length === 0) {
        return filtereditems;
      }

      filtereditems = filtereditems.filter((item) => {
        return item.ranges[key] <= filters.ranges[key].value;
      });
    }

    return filtereditems;
  }, [filters, items]);

  return (
    <FilterContext.Provider
      value={{
        filters,
        filterResults,
        updateCategory,
        updateRange,
        updateSearch,
        reset,
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
