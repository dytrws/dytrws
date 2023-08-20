import { Tabs } from "./components/Tabs";
import { Filter } from "./components/Filter";

export function ComponentConfiguration() {
  return (
    <>
      <Tabs tabs={["food", "animals", "sports"]} selectedId="food" />
      <Filter />
    </>
  );
}
