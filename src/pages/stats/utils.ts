import { ICostDto } from "@/types/business";
import { FiltersState } from "./types";

export const getFilteredCosts = (
  costs: ICostDto[],
  filtersState: FiltersState
) => {
  return costs.filter((cost) => {
    if (
      filtersState.categoryId &&
      cost.categoryId !== filtersState.categoryId
    ) {
      return false;
    }
    if (filtersState.dateRange) {
      if (
        filtersState.dateRange.start &&
        cost.createdAt < filtersState.dateRange.start
      ) {
        return false;
      }

      if (
        filtersState.dateRange.end &&
        cost.createdAt > filtersState.dateRange.end
      ) {
        return false;
      }
    }

    return true;
  });
};
