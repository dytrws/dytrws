import { useState } from "react";
import { Checkboxgroup } from "./components/Checkboxgroup";

export function ExampleCheckboxgroup() {
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

  return (
    <ul>
      <li>
        <Checkboxgroup label="type" options={type} setOptions={setType} />
        <pre>
          Checked types:{" "}
          {JSON.stringify(
            type.filter((item) => item.value).map((item) => item.id)
          )}
        </pre>
      </li>
      <li>
        <Checkboxgroup label="taste" options={taste} setOptions={setTaste} />
        <pre>
          Checked tastes:{" "}
          {JSON.stringify(
            taste.filter((item) => item.value).map((item) => item.id)
          )}
        </pre>
      </li>
    </ul>
  );
}
