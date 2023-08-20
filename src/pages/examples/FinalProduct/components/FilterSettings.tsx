import { Checkboxgroup } from "./Checkboxgroup";
import { RangeSlider } from "./RangeSlider";
import { TextSearch } from "./TextSearch";
import { FilterReset } from "./FilterReset";
import { useFilterContext } from "../hooks/useFilterContext";

export function FilterSettings() {
  const { filters, updateCategory, updateRange, updateSearch, reset } =
    useFilterContext();

  return (
    <div className="filter__settings">
      <div className="filter__settings-header-container">
        <h2>Filter</h2>
        <div>
          <FilterReset onClick={reset} />
        </div>
      </div>
      <TextSearch
        value={filters.search.value}
        onUpdate={(e) => updateSearch(e.target.value)}
      />

      <ul>
        {Object.entries(filters.categories).map(([key, value]) => {
          return (
            <li key={key}>
              <Checkboxgroup
                label={key}
                options={value.options}
                onUpdate={(e) =>
                  updateCategory(key, e.target.value, e.target.checked)
                }
              />
            </li>
          );
        })}

        {Object.entries(filters.ranges).map(([key, value]) => {
          return (
            <li key={key}>
              <RangeSlider
                label={key}
                min={value.min}
                max={value.max}
                value={value.value}
                onUpdate={(e) => updateRange(key, e.target.valueAsNumber)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
