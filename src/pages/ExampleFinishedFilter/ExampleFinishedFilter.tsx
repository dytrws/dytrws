import { Filter } from "./components/Filter";
import { Tabs } from "./components/Tabs";
import { useEffect, useState } from "react";
import { Item } from "./filter.types";

export function ExampleFinishedFilter() {
  const [activeFilter, setActiveFilter] = useState("food");
  const [items, setItems] = useState<Item[]>();

  useEffect(() => {
    let ignore = false;
    setItems(undefined);

    async function startFetching() {
      const response = await fetch(`/data/${activeFilter}.json`);
      const data = await response.json();

      if (!ignore) {
        setItems(data);
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, [activeFilter, setItems]);

  // [LEARNING OPPORTUNITY]: disable/enable key attribute
  // [LEARNING OPPORTUNITY]: work with use/Suspense
  // [LEARNING OPPORTUNITY]: explain react-Router
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
