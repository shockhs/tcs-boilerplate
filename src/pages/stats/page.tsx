import React, { FC, useCallback, useEffect, useState } from "react";
import { observer } from "mobx-react";

import { Filters } from "@/shared/filters";

import { SContainer, SCosts, SHeader, STableTitle } from "./style";
import { FiltersState, IProps } from "./types";
import { getFilteredCosts } from "./utils";
import { ICostDto } from "@/types/business";
import { CostElement } from "@/shared/cost-element";

const StatsPage: FC<IProps> = observer((props) => {
  const { localStore } = props;

  const { categories, costs } = localStore;

  const [visibleCosts, setVisibleCosts] = useState<ICostDto[]>(
    localStore.costs
  );

  const [filtersState, setFiltersState] = useState<FiltersState>({
    categoryId: null,
    dateRange: {
      start: null,
      end: null,
    },
  });

  const handleApply = useCallback(() => {
    setVisibleCosts(getFilteredCosts(costs, filtersState));
  }, [costs, filtersState]);

  const handleReset = useCallback(() => {
    setFiltersState({
      categoryId: null,
      dateRange: {
        start: null,
        end: null,
      },
    });
    setVisibleCosts(costs);
  }, [costs]);

  useEffect(() => {
    setVisibleCosts(costs);
  }, [costs]);

  return (
    <SContainer>
      <Filters
        categories={categories}
        filtersState={filtersState}
        setFiltersState={setFiltersState}
        handleApply={handleApply}
        handleReset={handleReset}
      />
      <SCosts>
        <thead>
          <SHeader>
            <th>
              <STableTitle>Отображаемое имя</STableTitle>
            </th>
            <th>
              <STableTitle>Категория</STableTitle>
            </th>
            <th>
              <STableTitle>Сумма</STableTitle>
            </th>
            <th>
              <STableTitle>Дата создания</STableTitle>
            </th>
            <th>
              <STableTitle>Действия</STableTitle>
            </th>
          </SHeader>
        </thead>
        <tbody>
          {visibleCosts.map((cost) => (
            <CostElement key={cost.id} cost={cost} categories={categories} />
          ))}
        </tbody>
      </SCosts>
    </SContainer>
  );
});

export default StatsPage;
