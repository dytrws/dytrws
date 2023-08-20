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
          <Checkboxgroup />
        </li>
        <li>
          <Checkboxgroup />
        </li>
        <li>
          <RangeSlider />
        </li>
      </ul>
    </div>
  );
}
