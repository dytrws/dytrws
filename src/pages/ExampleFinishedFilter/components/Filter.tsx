import { useMemo } from "react";
import { FilterResults } from "./FilterResults";
import { FilterSettings } from "./FilterSettings";
import { extractFilterOptionsFromDataset } from "../shared/functions";
import { Item } from "../filter.types";
import { useFilter } from "../hooks/useFilter";

export function Filter({ items }: { items: Item[] }) {
  const { filters, updateCategory, updateRange, updateSearch, reset } =
    useFilter(extractFilterOptionsFromDataset(items));

  const filterResults = useMemo(() => {
    let filtereditems = items;

    if (filters.search.value) {
      filtereditems = items.filter((item) =>
        item.name.toLowerCase().includes(filters.search.value.toLowerCase())
      );
    }

    for (const key in filters.categories) {
      if (filtereditems.length === 0) {
        return filtereditems;
      }

      if (filters.categories[key].options.every((option) => !option.value)) {
        continue;
      }

      filtereditems = items.filter((item) =>
        filters.categories[key].options.find((option) => {
          const comparision = item.categories[key];
          if (Array.isArray(comparision)) {
            return option.value && comparision.includes(option.id);
          } else if (typeof comparision === "string") {
            console.log(comparision, option.id);
            return option.value && comparision === option.id;
          }

          return false;
        })
      );
    }

    for (const key in filters.ranges) {
      if (filtereditems.length === 0) {
        return filtereditems;
      }

      filtereditems = filtereditems.filter((item) => {
        return item.ranges[key] <= filters.ranges[key].value;
      });
    }

    return filtereditems;
  }, [filters, items]);

  return (
    <>
      <div className="filter">
        <FilterSettings
          filters={filters}
          updateCategory={updateCategory}
          updateRange={updateRange}
          updateSearch={updateSearch}
          reset={reset}
        />
        <FilterResults
          items={filterResults}
          search={filters.search.value}
          reset={reset}
        />
      </div>
    </>
  );
}
