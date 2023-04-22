import React, { FC, memo, useCallback } from "react";

import { SCategoryElement, SButton, STitle } from "./style";
import { ICategoryDto } from "@/types/business";

interface IProps {
  category: ICategoryDto;
  deleteCategory: (id: string) => void;
}

const CategoryElementImpl: FC<IProps> = (props) => {
  const { category, deleteCategory } = props;

  const { id, name } = category;

  const onDeleteClick = useCallback(() => {
    deleteCategory(id);
  }, [id, deleteCategory]);

  return (
    <SCategoryElement>
      <STitle>{name}</STitle>
      <SButton onClick={onDeleteClick}>Удалить</SButton>
    </SCategoryElement>
  );
};

export const CategoryElement = memo(CategoryElementImpl);
