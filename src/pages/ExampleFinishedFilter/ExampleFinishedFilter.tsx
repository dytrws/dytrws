import { Filter } from "./components/Filter";
import { Tabs } from "./components/Tabs";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

function createUrlFromId(id: string) {
  return `/data/${id}.json`;
}

export function ExampleFinishedFilter() {
  const [activeFilter, setActiveFilter] = useState("food");
  const url = createUrlFromId(activeFilter);
  const items = useFetch(url);

  return (
    <>
      <Tabs
        options={["food", "animals", "sports"]}
        active={activeFilter}
        onUpdate={setActiveFilter}
      />
      {!items && <p>Loading...</p>}
      {items && <Filter key={activeFilter} items={items} />}
    </>
  );
}
