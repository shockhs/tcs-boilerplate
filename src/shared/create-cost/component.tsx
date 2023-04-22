import React, {
  FC,
  FormEvent,
  memo,
  useCallback,
  useMemo,
  useState,
} from "react";
import cloneDeep from "lodash/cloneDeep";
import set from "lodash/set";

import { TextField } from "@/components/TextField";

import { SActionForm, SButton } from "./style";
import { IProps } from "./types";
import { InputType } from "@/components/TextField/types";
import { Dropdown } from "@/components/Dropdown";
import { DropdownOption } from "@/components/Dropdown/types";
import { Nullable } from "@/types/utils";
import { useValidation } from "@/hooks";
import { DataType } from "@/types/hooks/useValidation";
import { ICreateCostDto } from "@/types/business";
import { DEFAULT_DATA } from "./constants";

const CreateCostFormImpl: FC<IProps> = (props) => {
  const { createCost, categories } = props;

  const [dto, setDto] = useState<ICreateCostDto>(DEFAULT_DATA);

  const { errorFields, isValid } = useValidation({
    elements: [
      {
        type: DataType.text,
        statePath: "displayName",
        value: dto.displayName,
      },
      {
        type: DataType.number,
        statePath: "costValue",
        value: dto.costValue,
        metadata: {
          minValue: 0,
        },
      },
      {
        type: DataType.text,
        statePath: "categoryId",
        value: dto.categoryId,
      },
    ],
  });

  const categoriesBuiltOptions: DropdownOption[] = useMemo(() => {
    return categories.map((category) => ({
      id: category.id,
      displayName: category.displayName,
    }));
  }, [categories]);

  const handleChange = useCallback(
    (newValue: string | number, statePath?: string) => {
      if (!statePath) return;

      const newDto = cloneDeep(dto);

      set(newDto, statePath, newValue);

      setDto(newDto);
    },
    [dto]
  );

  const handleChangeDropdown = useCallback(
    (newValue: Nullable<DropdownOption>, statePath?: string) => {
      if (!statePath) return;

      const newDto = cloneDeep(dto);

      set(newDto, statePath, newValue ? newValue.id : newValue);

      setDto(newDto);
    },
    [dto]
  );

  const handleConfirm = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (!isValid()) {
        return;
      }

      createCost(dto);
    },
    [createCost, dto, isValid]
  );

  const searchRequest = useCallback(async () => {
    return categoriesBuiltOptions;
  }, [categoriesBuiltOptions]);

  return (
    <SActionForm onSubmit={handleConfirm}>
      <TextField
        value={dto.displayName}
        statePath="displayName"
        onChange={handleChange}
        label="Отобраемое имя"
        errorMessage={errorFields["displayName"]}
      />
      <Dropdown
        value={
          dto.categoryId
            ? categoriesBuiltOptions.find(
                (category) => category.id === dto.categoryId
              )
            : null
        }
        statePath="categoryId"
        errorMessage={errorFields["categoryId"]}
        onChange={handleChangeDropdown}
        searchRequest={searchRequest}
        withDefaultOptions={true}
        label="Категория"
      />
      <TextField
        value={dto.costValue}
        statePath="costValue"
        errorMessage={errorFields["costValue"]}
        onChange={handleChange}
        inputType={InputType.number}
        label="Сумма"
      />
      <SButton type="submit">Создать</SButton>
    </SActionForm>
  );
};

export const CreateCostForm = memo(CreateCostFormImpl);
