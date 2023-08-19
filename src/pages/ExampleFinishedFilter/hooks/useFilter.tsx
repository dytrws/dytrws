import { useCallback } from "react";
import { FilterAction, Filter } from "../types";
// without immer:
// import { useReducer } from "react";
import { useImmerReducer } from "use-immer";

export function useFilter(initialState: Filter) {
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
    filters,
    reset,
    updateSearch,
    updateCategory,
    updateRange,
  };
}
