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

export type CategoryFilters = { [key: string]: { options: Option[] } };

export type RangeFilters = {
  [key: string]: { min: number; max: number; value: number };
};

export type Filter = {
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
