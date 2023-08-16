import { FilterResults } from "./FilterResults";
import { FilterSettings } from "./FilterSettings";
import { Item } from "../filter.types";
import { FilterContextProvider } from "../hooks/useFilterContext";

export function Filter({ items }: { items: Item[] }) {
  return (
    <div className="filter">
      <FilterContextProvider items={items}>
        <FilterSettings />
        <FilterResults />
      </FilterContextProvider>
    </div>
  );
}
