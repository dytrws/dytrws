import { useState } from "react";
import { Tabs } from "./components/Tabs";

export function ExampleTabs() {
  const options = ["food", "animals", "sports"];
  const [activeFilter, setActiveFilter] = useState(options[0]);

  return (
    <>
      <Tabs
        options={options}
        active={activeFilter}
        onUpdate={setActiveFilter}
      />
      <pre>Checked tab: {activeFilter}</pre>
    </>
  );
}
