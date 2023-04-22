import { FiltersState } from "@/pages/stats/types";
import { ICategoryDto } from "@/types/business";
import { AnyFunction } from "@/types/utils";

export interface IProps {
  filtersState: FiltersState;
  setFiltersState: (filtersState: FiltersState) => void;
  categories: ICategoryDto[];
  handleReset: AnyFunction;
  handleApply: AnyFunction;
}
