import React, { FC, memo, useCallback } from "react";

import { ICategoryDto, ICostDto } from "@/types/business";
import { beautify } from "@/utils";
import { CURRENCY } from "@/constants/currency";

import { SCostElement, SButton, STitle } from "./style";

interface IProps {
  cost: ICostDto;
  categories: ICategoryDto[];
  deleteCost: (id: string) => void;
}

const CostElementImpl: FC<IProps> = (props) => {
  const { cost, deleteCost, categories } = props;

  const { id, displayName, costValue, categoryId } = cost;

  const onDeleteClick = useCallback(() => {
    deleteCost(id);
  }, [id, deleteCost]);

  return (
    <SCostElement>
      <td>
        <STitle>{displayName}</STitle>
      </td>
      <td>
        <STitle>
          {categories.find((category) => category.id === categoryId)
            ?.displayName || "Не задано"}
        </STitle>
      </td>
      <td>
        <STitle>{`${beautify.money(costValue)} ${CURRENCY.ruble}`}</STitle>
      </td>
      <td>
        <SButton onClick={onDeleteClick}>Удалить</SButton>
      </td>
    </SCostElement>
  );
};

export const CostElement = memo(CostElementImpl);
