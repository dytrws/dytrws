import { useState } from "react";
import { Tabs } from "./components/Tabs";
import food from "../../../data/food.json";
import sports from "../../../data/sports.json";
import animals from "../../../data/animals.json";
import { FilterResults } from "./components/FilterResults";

const items: { [x: string]: any } = {
  food,
  sports,
  animals,
};

export function ConnectingTabsWithFilterResults() {
  const options = ["food", "animals", "sports"];
  const [activeTab, setActiveTab] = useState(options[0]);

  return (
    <>
      <Tabs options={options} active={activeTab} onUpdate={setActiveTab} />
      <FilterResults items={items[activeTab]} />
    </>
  );
}
