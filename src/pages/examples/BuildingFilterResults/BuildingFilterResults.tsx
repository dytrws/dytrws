import items from "../../../data/food.json";
import { FilterResults } from "./components/FilterResults";

export function BuildingFilterResults() {
  return <FilterResults items={items} />;
}
