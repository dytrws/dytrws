import { FilterResults } from "./FilterResults";
import { FilterSettings } from "./FilterSettings";
import { Item } from "../types";
import { FilterContextProvider } from "../hooks/useFilterContext";

interface FilterProps {
  items: Item[];
}

export function Filter({ items }: FilterProps) {
  return (
    <div className="filter">
      <FilterContextProvider items={items}>
        <FilterSettings />
        <FilterResults />
      </FilterContextProvider>
    </div>
  );
}
