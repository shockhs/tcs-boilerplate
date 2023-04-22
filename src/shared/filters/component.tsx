import React, { FC, memo, useCallback, useMemo } from "react";
import cloneDeep from "lodash/cloneDeep";
import set from "lodash/set";

import { DropdownOption } from "@/components/Dropdown/types";
import { Dropdown } from "@/components/Dropdown";
import { DateField } from "@/components/DateField";
import { Nullable } from "@/types/utils";

import { IProps } from "./types";
import { SActions, SButton, SContainer } from "./style";
import { DateFieldValue } from "@/components/DateField/types";

const FiltersImpl: FC<IProps> = (props) => {
  const {
    categories,
    filtersState,
    setFiltersState,
    handleApply,
    handleReset,
  } = props;

  const categoriesBuiltOptions: DropdownOption[] = useMemo(() => {
    return categories.map((category) => ({
      id: category.id,
      displayName: category.displayName,
    }));
  }, [categories]);

  const searchRequest = useCallback(async () => {
    return categoriesBuiltOptions;
  }, [categoriesBuiltOptions]);

  const handleChange = useCallback(
    (newValue: Nullable<DateFieldValue>, statePath?: string) => {
      if (!statePath) return;

      const newFiltersState = cloneDeep(filtersState);

      set(newFiltersState, statePath, newValue);

      setFiltersState(newFiltersState);
    },
    [filtersState, setFiltersState]
  );

  const handleChangeDropdown = useCallback(
    (newValue: Nullable<DropdownOption>, statePath?: string) => {
      if (!statePath) return;

      const newFiltersState = cloneDeep(filtersState);

      set(newFiltersState, statePath, newValue ? newValue.id : newValue);

      setFiltersState(newFiltersState);
    },
    [filtersState, setFiltersState]
  );

  return (
    <SContainer>
      <Dropdown
        value={
          filtersState.categoryId
            ? categoriesBuiltOptions.find(
                (category) => category.id === filtersState.categoryId
              )
            : null
        }
        statePath="categoryId"
        onChange={handleChangeDropdown}
        searchRequest={searchRequest}
        withDefaultOptions={true}
        label="Категория"
      />
      <DateField
        label="Период"
        statePath="dateRange"
        value={filtersState.dateRange}
        onChange={handleChange}
      />
      <SActions>
        <SButton $primary={true} onClick={handleApply}>
          Применить
        </SButton>
        <SButton onClick={handleReset}>Сбросить</SButton>
      </SActions>
    </SContainer>
  );
};

export const Filters = memo(FiltersImpl);
