import { FilterSettings } from "./FilterSettings";
import { FilterResults } from "./FilterResults";
import items from "../../../../data/food.json";

export function Filter() {
  return (
    <div className="filter">
      <FilterSettings />
      <FilterResults items={items} />
    </div>
  );
}
