import {
  Item,
  SearchFilter,
  CategoryFilters,
  RangeFilters,
} from "../filter.types";

export function extractFilterOptionsFromDataset(items: Item[]) {
  const search: SearchFilter = { value: "" };
  const categories: CategoryFilters = {};
  const ranges: RangeFilters = {};

  const optionkeys: string[] = [];
  for (const item of items) {
    for (const categorykey in item.categories) {
      if (!(categorykey in categories)) {
        categories[categorykey] = {
          options: [],
        };
      }

      const itemCategory = item.categories[categorykey];

      if (Array.isArray(itemCategory)) {
        for (const category of itemCategory) {
          if (!optionkeys.includes(category)) {
            optionkeys.push(category);
            categories[categorykey].options.push({
              id: category,
              value: false,
            });
          }
        }
        continue;
      } else if (typeof itemCategory === "string") {
        if (!optionkeys.includes(itemCategory)) {
          optionkeys.push(itemCategory);
          categories[categorykey].options.push({
            id: itemCategory,
            value: false,
          });
        }
      }
    }

    for (const rangekey in item.ranges) {
      if (!(rangekey in ranges)) {
        ranges[rangekey] = { min: 0, max: 0, value: 0 };
      }

      if (item.ranges[rangekey] < ranges[rangekey].min) {
        ranges[rangekey].min = item.ranges[rangekey];
      }

      if (item.ranges[rangekey] > ranges[rangekey].max) {
        ranges[rangekey].max = item.ranges[rangekey];
        ranges[rangekey].value = item.ranges[rangekey];
      }
    }
  }

  return {
    search,
    categories,
    ranges,
  };
}
