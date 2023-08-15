import { Filter } from "./components/Filter";
import { Tabs } from "./components/Tabs";
import { useEffect, useState } from "react";
import { Item } from "./filter.types";

export function ExampleFinishedFilter() {
  const [activeFilter, setActiveFilter] = useState("food");
  const [items, setItems] = useState<Item[]>();

  useEffect(() => {
    setItems(undefined);
    fetch(`/data/${activeFilter}.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });

    return () => {
      setItems(undefined);
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
