export interface Item {
  id: number;
  name: string;
  categories: {
    [id: string]: string | string[];
  };
  ranges: {
    [id: string]: number;
  };
}

export type Option = {
  id: string;
  value: boolean;
};

export type SearchFilter = {
  value: string;
};

export type CategoryFilter = { options: Option[] };
export type CategoryFilters = { [key: string]: CategoryFilter };

export type RangeFilter = { min: number; max: number; value: number };
export type RangeFilters = {
  [key: string]: RangeFilter;
};

export type TFilter = {
  search: SearchFilter;
  categories: CategoryFilters;
  ranges: RangeFilters;
};

export type Action =
  | {
      type: "SET_SEARCH";
      payload: {
        value: string;
      };
    }
  | {
      type: "SET_CATEGORY";
      payload: { id: string; optionid: string; value: boolean };
    }
  | {
      type: "SET_RANGE";
      payload: { id: string; value: number };
    }
  | {
      type: "RESET";
    };
