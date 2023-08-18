import { Filter } from "./components/Filter";
import { Tabs } from "./components/Tabs";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { Item } from "./types";

function createUrlFromId(id: string) {
  return `/data/${id}.json`;
}

const options = ["food", "animals", "sports"];

export function ExampleFinishedFilter() {
  const [activeFilter, setActiveFilter] = useState(options[0]);
  const url = createUrlFromId(activeFilter);
  const { isLoading, data } = useFetch<Item[]>(url);

  return (
    <>
      <Tabs
        options={options}
        activeId={activeFilter}
        onChange={setActiveFilter}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data && <Filter key={activeFilter} items={data} />
      )}
    </>
  );
}
