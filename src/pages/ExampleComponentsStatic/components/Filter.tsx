import { FilterSettings } from "./FilterSettings";
import { FilterResults } from "./FilterResults";

export function Filter() {
  return (
    <div className="filter">
      <FilterSettings />
      <FilterResults />
    </div>
  );
}
