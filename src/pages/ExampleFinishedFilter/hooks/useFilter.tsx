import { useCallback, useMemo } from "react";
import {
  FilterAction,
  Filter,
  Item,
  SearchFilter,
  CategoryFilters,
  RangeFilters,
} from "../types";
// without immer:
// import { useReducer } from "react";
import { useImmerReducer } from "use-immer";

export function useFilter(items: Item[]) {
  const initialState = useMemo(
    () => extractFilterOptionsFromItems(items),
    [items]
  );

  const reducer = useCallback(
    (state: Filter, action: FilterAction) => {
      switch (action.type) {
        case "RESET":
          return initialState;
        case "SET_SEARCH":
          // without immer:
          // return { ...state, search: { value: action.payload.value } };
          state.search.value = action.payload.value;

          break;
        case "SET_CATEGORY":
          // without immer:
          // return {
          //   ...state,
          //   categories: {
          //     ...state.categories,
          //     [action.payload.id]: {
          //       ...state.categories[action.payload.id],
          //       options: state.categories[action.payload.id].options.map(
          //         (option) => {
          //           if (option.id === action.payload.optionid) {
          //             return { ...option, value: action.payload.value };
          //           }

          //           return option;
          //         }
          //       ),
          //     },
          //   },
          // };
          const optionElement = state.categories[
            action.payload.id
          ].options.find((element) => element.id === action.payload.optionId);

          if (optionElement) {
            optionElement.value = action.payload.value;
          }

          break;
        case "SET_RANGE":
          // without immer:
          // return {
          //   ...state,
          //   ranges: {
          //     ...state.ranges,
          //     [action.payload.id]: {
          //       ...state.ranges[action.payload.id],
          //       value: action.payload.value,
          //     },
          //   },
          // };
          state.ranges[action.payload.id].value = action.payload.value;

          break;
        default:
          throw new Error();
      }
    },
    [initialState]
  );
  // without immer:
  // const [filters, dispatchFilters] = useReducer(reducer, initialState);
  const [filters, dispatchFilters] = useImmerReducer(reducer, initialState);

  // potential performance optimiziations for huge lists of items.
  // comes at the cost of a second re-render:
  // const defferedFilters = useDeferredValue(filters);

  const filterResults = useMemo(() => {
    return filterItems(items, filters);
  }, [items, filters]);

  const reset = useCallback(() => {
    dispatchFilters({ type: "RESET" });
  }, []);

  const updateSearch = useCallback((value: string) => {
    dispatchFilters({ type: "SET_SEARCH", payload: { value } });
  }, []);

  const updateCategory = useCallback(
    (id: string, optionId: string, value: boolean) => {
      dispatchFilters({
        type: "SET_CATEGORY",
        payload: { id, optionId, value },
      });
    },
    []
  );

  const updateRange = useCallback((id: string, value: number) => {
    dispatchFilters({ type: "SET_RANGE", payload: { id, value } });
  }, []);

  return {
    filterResults,
    filters,
    reset,
    updateSearch,
    updateCategory,
    updateRange,
  };
}

function filterSearch(item: Item, searchValue: string) {
  if (searchValue) {
    return item.name.toLowerCase().includes(searchValue.toLowerCase());
  }

  return true;
}

function filterCategories(item: Item, categories: CategoryFilters) {
  for (const categoryId in categories) {
    const category = categories[categoryId];

    if (category.options.every((option) => !option.value)) {
      continue;
    }

    const itemCategory = item.categories[categoryId];

    const itemIsCategory = category.options.some((option) => {
      if (!option.value) {
        return false;
      }

      if (Array.isArray(itemCategory)) {
        return itemCategory.includes(option.id);
      } else if (typeof itemCategory === "string") {
        return itemCategory === option.id;
      }
    });

    if (!itemIsCategory) {
      return false;
    }
  }

  return true;
}

function filterRanges(item: Item, ranges: RangeFilters) {
  for (const rangeKey in ranges) {
    const itemIsRange = item.ranges[rangeKey] <= ranges[rangeKey].value;

    if (!itemIsRange) {
      return false;
    }
  }

  return true;
}

function filterItems(items: Item[], filter: Filter) {
  let filterResults = items.filter((item) => {
    return (
      filterSearch(item, filter.search.value) &&
      filterCategories(item, filter.categories) &&
      filterRanges(item, filter.ranges)
    );
  });

  return filterResults;
}

function extractFilterOptionsFromItems(items: Item[]) {
  const searchFilter: SearchFilter = { value: "" };
  const categoryFilters: CategoryFilters = {};
  const rangeFilters: RangeFilters = {};

  function handleCategory(
    categoryId: string,
    categoryValue: string | string[]
  ) {
    if (!(categoryId in categoryFilters)) {
      categoryFilters[categoryId] = {
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
      !categoryFilters[categoryId].options.some(
        (option) => option.id === optionId
      )
    ) {
      categoryFilters[categoryId].options.push({
        id: optionId,
        value: false,
      });
    }
  }

  function handleRange(rangeId: string, rangeValue: number) {
    if (!(rangeId in rangeFilters)) {
      rangeFilters[rangeId] = { min: 0, max: 0, value: 0 };
    }

    if (rangeValue < rangeFilters[rangeId].min) {
      rangeFilters[rangeId].min = rangeValue;
    }

    if (rangeValue > rangeFilters[rangeId].max) {
      rangeFilters[rangeId].max = rangeValue;
      rangeFilters[rangeId].value = rangeValue;
    }
  }

  for (const item of items) {
    for (const categoryId in item.categories) {
      handleCategory(categoryId, item.categories[categoryId]);
    }

    for (const rangeId in item.ranges) {
      handleRange(rangeId, item.ranges[rangeId]);
    }
  }

  return {
    search: searchFilter,
    categories: categoryFilters,
    ranges: rangeFilters,
  };
}
