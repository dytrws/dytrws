import { TextSearch } from "./TextSearch";
import { Checkboxgroup } from "./Checkboxgroup";
import { RangeSlider } from "./RangeSlider";

export function FilterSettings() {
  return (
    <div className="filter__settings">
      <div className="filter__settings-header-container">
        <h2>Filter</h2>
        <div>
          <button className="filter__reset">Reset</button>
        </div>
      </div>
      <TextSearch />
      <ul>
        <li>
          <Checkboxgroup
            label="type"
            options={["fruit", "vegetables", "root"]}
          />
        </li>
        <li>
          <Checkboxgroup
            label="taste"
            options={["sweet", "sour", "umami", "spicy"]}
          />
        </li>
        <li>
          <RangeSlider label="price" min={0} max={7} />
        </li>
      </ul>
    </div>
  );
}
