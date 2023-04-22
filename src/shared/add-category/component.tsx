import React, { FC, FormEvent, memo, useCallback, useState } from "react";

import { TextField } from "@/components/TextField";

import { SActionForm, SButton } from "./style";
import { IProps } from "./types";

const AddCategoryFormImpl: FC<IProps> = (props) => {
  const { addCategory } = props;

  const [categoryName, setCategoryName] = useState("");

  const handleConfirm = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      addCategory(categoryName);
      setCategoryName("");
    },
    [addCategory, categoryName]
  );

  return (
    <SActionForm onSubmit={handleConfirm}>
      <TextField
        value={categoryName}
        onChange={setCategoryName}
        label="Название категории"
      />
      <SButton type="submit">Создать</SButton>
    </SActionForm>
  );
};

export const AddCategoryForm = memo(AddCategoryFormImpl);
