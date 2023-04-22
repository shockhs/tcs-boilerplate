import React, { FC, memo, useCallback } from "react";

import { SCostElement, SButton, STitle } from "./style";
import { ICostDto } from "@/types/business";

interface IProps {
  cost: ICostDto;
  deleteCost: (id: string) => void;
}

const CostElementImpl: FC<IProps> = (props) => {
  const { cost, deleteCost } = props;

  const { id, displayName } = cost;

  const onDeleteClick = useCallback(() => {
    deleteCost(id);
  }, [id, deleteCost]);

  return (
    <SCostElement>
      <STitle>{displayName}</STitle>
      <SButton onClick={onDeleteClick}>Удалить</SButton>
    </SCostElement>
  );
};

export const CostElement = memo(CostElementImpl);
