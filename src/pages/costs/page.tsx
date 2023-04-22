import React, { FC, useCallback } from "react";
import { observer } from "mobx-react";

import { CreateCostForm } from "@/shared/create-cost";

import { SContainer, SCosts } from "./style";
import { IProps } from "./types";
import { CostElement } from "@/shared/cost-element";
import { ICreateCostDto } from "@/types/business";

const CostsPage: FC<IProps> = observer((props) => {
  const { localStore } = props;

  const { categories } = localStore;

  const createCost = useCallback(
    (dto: ICreateCostDto) => {
      localStore.createCost(dto);
    },
    [localStore]
  );

  const deleteCost = useCallback(
    (id: string) => {
      localStore.deleteCost(id);
    },
    [localStore]
  );

  return (
    <SContainer>
      <CreateCostForm createCost={createCost} categories={categories} />
      <SCosts>
        {[...localStore.costs].map((cost) => (
          <li key={cost.id}>
            <CostElement cost={cost} deleteCost={deleteCost} />
          </li>
        ))}
      </SCosts>
    </SContainer>
  );
});

export default CostsPage;
