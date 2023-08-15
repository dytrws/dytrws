import items from "../../data/food.json";
import { FilterResults } from "./components/FilterResults";

export function ExampleFilterResults() {
  return <FilterResults items={items} />;
}
