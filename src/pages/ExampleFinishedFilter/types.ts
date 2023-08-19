export interface Item {
  id: number;
  name: string;
  categories: {
    [x: string]: string | string[];
  };
  ranges: {
    [x: string]: number;
  };
}

export type SearchFilter = {
  value: string;
};

export type Option = {
  id: string;
  value: boolean;
};

export type CategoryFilters = { [key: string]: { options: Option[] } };

export type Range = { min: number; max: number; value: number };

export type RangeFilters = {
  [key: string]: Range;
};

export type Filter = {
  search: SearchFilter;
  categories: CategoryFilters;
  ranges: RangeFilters;
};

export type FilterAction =
  | {
      type: "RESET";
    }
  | {
      type: "SET_SEARCH";
      payload: {
        value: string;
      };
    }
  | {
      type: "SET_CATEGORY";
      payload: { id: string; optionId: string; value: boolean };
    }
  | {
      type: "SET_RANGE";
      payload: { id: string; value: number };
    };
