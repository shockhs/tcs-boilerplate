import React, { FC, useCallback } from "react";
import { observer } from "mobx-react";

import { AddCategoryForm } from "@/shared/add-category";
import { CategoryElement } from "@/shared/category-element";

import { SCategories, SContainer } from "./style";
import { IProps } from "./types";

const CategoriesPage: FC<IProps> = observer((props) => {
  const { localStore } = props;

  const addCategory = useCallback(
    (name: string) => {
      localStore.addCategory(name);
    },
    [localStore]
  );

  const deleteCategory = useCallback(
    (id: string) => {
      localStore.deleteCategory(id);
    },
    [localStore]
  );

  return (
    <SContainer>
      <AddCategoryForm addCategory={addCategory} />
      <SCategories>
        {[...localStore.categories].map((category) => (
          <CategoryElement
            key={category.id}
            category={category}
            deleteCategory={deleteCategory}
          />
        ))}
      </SCategories>
    </SContainer>
  );
});

export default CategoriesPage;
