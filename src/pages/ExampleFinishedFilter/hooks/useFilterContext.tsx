import { createContext, useContext } from "react";
import { useFilter } from "./useFilter";
import { Item } from "../types";

type FilterContextType = ReturnType<typeof useFilter> | null;

const FilterContext = createContext<FilterContextType>(null);

type FilterContextProviderProps = {
  children: React.ReactNode;
  items: Item[];
};

export function FilterContextProvider({
  children,
  items,
}: FilterContextProviderProps) {
  const filter = useFilter(items);

  return (
    <FilterContext.Provider value={filter}>{children}</FilterContext.Provider>
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
