import React, { FC, FormEvent, memo, useCallback, useState } from "react";

import { TextField } from "@/components/TextField";

import { SActionForm, SButton } from "./style";
import { IProps } from "./types";
import { DataType } from "@/types/hooks/useValidation";
import { useValidation } from "@/hooks";

const AddCategoryFormImpl: FC<IProps> = (props) => {
  const { addCategory } = props;

  const [categoryName, setCategoryName] = useState("");

  const { errorFields, isValid } = useValidation({
    elements: [
      {
        type: DataType.text,
        statePath: "categoryName",
        value: categoryName,
      },
    ],
  });

  const handleConfirm = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (!isValid()) {
        return;
      }

      addCategory(categoryName);
      setCategoryName("");
    },
    [addCategory, categoryName, isValid]
  );

  return (
    <SActionForm onSubmit={handleConfirm}>
      <TextField
        value={categoryName}
        onChange={setCategoryName}
        label="Название категории"
        errorMessage={errorFields["categoryName"]}
      />
      <SButton type="submit">Создать</SButton>
    </SActionForm>
  );
};

export const AddCategoryForm = memo(AddCategoryFormImpl);
