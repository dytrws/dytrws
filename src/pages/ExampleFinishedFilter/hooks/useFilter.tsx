import { Action, Filter } from "../filter.types";
// without immer:
// import { useReducer } from "react";
import { useImmerReducer } from "use-immer";

export function useFilter(initialState: Filter) {
  function reducer(state: Filter, action: Action) {
    switch (action.type) {
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
        const optionElement = state.categories[action.payload.id].options.find(
          (element) => element.id === action.payload.optionid
        );
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
      case "RESET":
        // because we wrote immutable code we can very easily reset to our initial state
        // which could be different from a state with everything on false/empty.
        return initialState;
      default:
        throw new Error();
    }
  }

  // without immer:
  // const [filters, dispatchFilters] = useReducer(
  const [filters, dispatchFilters] = useImmerReducer(reducer, initialState);

  return {
    filters,
    updateCategory: (id: string, optionid: string, value: boolean) =>
      dispatchFilters({
        type: "SET_CATEGORY",
        payload: { id, optionid, value },
      }),
    updateRange: (id: string, value: number) =>
      dispatchFilters({ type: "SET_RANGE", payload: { id, value } }),
    updateSearch: (value: string) =>
      dispatchFilters({ type: "SET_SEARCH", payload: { value } }),
    reset: () => dispatchFilters({ type: "RESET" }),
  };
}
