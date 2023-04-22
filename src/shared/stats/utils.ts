import { ICategoryDto, ICostDto } from "@/types/business";
import { guards } from "@/types/guards";
import { beautifyNumber } from "@/utils/beautify/number";

export const getCategoriesTotalCosts = ({
  costs,
  categories,
  totalCostsValue,
}: {
  totalCostsValue: number;
  costs: ICostDto[];
  categories: ICategoryDto[];
}): {
  categoryName: string;
  costValue: number;
  percent: string;
}[] => {
  const categoriesNameMap = new Map();

  categoriesNameMap.set("Прочее", "Прочее");

  categories.forEach((category) => {
    categoriesNameMap.set(category.id, category.displayName);
  });

  const totalCostValuesByCategoryId = costs.reduce((acc, cost) => {
    const categoryId = cost.categoryId || "Прочее";

    if (guards.isNumber(acc[categoryId])) {
      acc[categoryId] = acc[categoryId] + cost.costValue;
    } else {
      acc[categoryId] = cost.costValue;
    }

    return acc;
  }, {} as Record<string, number>);

  return Object.entries(totalCostValuesByCategoryId).map(
    ([categoryId, costValue]) => {
      return {
        categoryName: categoriesNameMap.get(categoryId),
        costValue,
        percent: beautifyNumber((costValue / totalCostsValue) * 100),
      };
    }
  );
};

export const getTotalCostsValue = ({ costs }: { costs: ICostDto[] }) => {
  return costs.reduce((acc, item) => {
    acc += item.costValue;
    return acc;
  }, 0);
};
