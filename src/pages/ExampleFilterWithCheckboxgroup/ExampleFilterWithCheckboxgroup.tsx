import { useState } from "react";
import { Checkboxgroup } from "./components/Checkboxgroup";
import items from "../../data/food.json";
import { FilterResults } from "./components/FilterResults";

export function ExampleFilterWithCheckboxgroup() {
  const [type, setType] = useState([
    { id: "fruit", value: false },
    { id: "vegetable", value: false },
    { id: "root", value: false },
  ]);

  const [taste, setTaste] = useState([
    { id: "sweet", value: false },
    { id: "sour", value: false },
    { id: "umami", value: false },
    { id: "spicy", value: false },
  ]);

  // If no type is selected, show all items
  const typeFilterInactive = type.every((item) => !item.value);

  // If no taste is selected, show all items
  const tasteFilterInactive = taste.every((item) => !item.value);

  const filterResults = items.filter((item) => {
    const typeMatch =
      typeFilterInactive ||
      type.some((typeItem) => {
        if (typeItem.value) {
          if (typeof item.categories.type === "string") {
            return item.categories.type === typeItem.id;
          }
        }
        return false;
      });

    const tasteMatch =
      tasteFilterInactive ||
      taste.some((tasteItem) => {
        if (tasteItem.value) {
          if (typeof item.categories.taste === "string") {
            return item.categories.taste === tasteItem.id;
          } else if (Array.isArray(item.categories.taste)) {
            return item.categories.taste.includes(tasteItem.id);
          }
        }
        return false;
      });

    return typeMatch && tasteMatch;
  });

  return (
    <>
      <ul>
        <li>
          <Checkboxgroup label="type" options={type} setOptions={setType} />
        </li>
        <li>
          <Checkboxgroup label="taste" options={taste} setOptions={setTaste} />
        </li>
      </ul>

      <FilterResults items={filterResults} />
    </>
  );
}
