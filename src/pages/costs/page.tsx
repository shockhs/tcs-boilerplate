import React, { FC, useCallback } from "react";
import { observer } from "mobx-react";

import { CreateCostForm } from "@/shared/create-cost";
import { CostElement } from "@/shared/cost-element";
import { ICreateCostDto } from "@/types/business";

import { SContainer, SCosts, SHeader, STableTitle } from "./style";
import { IProps } from "./types";

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
        <SHeader>
          <th>
            <STableTitle>Отображаемое имя</STableTitle>
          </th>
          <th>
            <STableTitle>Категория</STableTitle>
          </th>
          <th>
            <STableTitle>Расход</STableTitle>
          </th>
          <th>
            <STableTitle>Действия</STableTitle>
          </th>
        </SHeader>
        {[...localStore.costs].map((cost) => (
          <CostElement
            key={cost.id}
            cost={cost}
            categories={categories}
            deleteCost={deleteCost}
          />
        ))}
      </SCosts>
    </SContainer>
  );
});

export default CostsPage;
