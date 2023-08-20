import { Filter } from "./components/Filter";
import { Tabs } from "./components/Tabs";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import { Item } from "./types";

function createUrlFromId(id: string) {
  return `/data/${id}.json`;
}

const tabOptions = ["food", "animals", "sports"];

export function FinalProduct() {
  const [activeFilter, setActiveFilter] = useState(tabOptions[0]);
  const url = createUrlFromId(activeFilter);
  const { isLoading, data } = useFetch<Item[]>(url);

  return (
    <>
      <Tabs
        tabs={tabOptions}
        activeId={activeFilter}
        onChange={setActiveFilter}
      />
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        data && <Filter key={activeFilter} items={data} />
      )}
    </>
  );
}
