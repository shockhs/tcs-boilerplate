import React, { FC, memo, useMemo } from "react";

import { beautify } from "@/utils";
import { CURRENCY } from "@/constants/currency";

import { IProps } from "./types";
import { getCategoriesTotalCosts, getTotalCostsValue } from "./utils";
import {
  SBlockTitle,
  SCategoriesInfo,
  SCategoryCostInfoContainer,
  SContainer,
  SInfoContainer,
  SListCategoriesCostInfo,
  SCategoryCostInfoTitle,
  SCategoryCostInfoValue,
  STitle,
  SValue,
  SCategoryPercentageCostValue,
} from "./style";

const StatsBarImpl: FC<IProps> = (props) => {
  const { categories, costs } = props;

  const totalCostsValue = useMemo(() => getTotalCostsValue({ costs }), [costs]);

  const categoriesTotalCosts = useMemo(
    () => getCategoriesTotalCosts({ costs, categories, totalCostsValue }),
    [costs, categories, totalCostsValue]
  );

  return (
    <SContainer>
      <SInfoContainer>
        <STitle>Потрачено всего</STitle>
        <SValue>{`${beautify.money(totalCostsValue)} ${
          CURRENCY.ruble
        }`}</SValue>
      </SInfoContainer>
      <SCategoriesInfo>
        <SBlockTitle>Расходы по категориям</SBlockTitle>
        <SListCategoriesCostInfo>
          {categoriesTotalCosts.map(({ categoryName, costValue, percent }) => (
            <li key={categoryName}>
              <SCategoryCostInfoContainer>
                <SCategoryCostInfoTitle>{categoryName}</SCategoryCostInfoTitle>
                <SCategoryCostInfoValue>{`${beautify.money(costValue)} ${
                  CURRENCY.ruble
                }`}</SCategoryCostInfoValue>
                <SCategoryPercentageCostValue>{`(${percent}%)`}</SCategoryPercentageCostValue>
              </SCategoryCostInfoContainer>
            </li>
          ))}
        </SListCategoriesCostInfo>
      </SCategoriesInfo>
    </SContainer>
  );
};

export const StatsBar = memo(StatsBarImpl);
