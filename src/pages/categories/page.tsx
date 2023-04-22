import React, { FC, useCallback } from "react";
import { observer } from "mobx-react";

import { AddCategoryForm } from "@/shared/add-category";
import { CategoryElement } from "@/shared/category-element";

import { SCategories, SContainer } from "./style";
import { IProps } from "./types";

const CategoriesPage: FC<IProps> = observer((props) => {
  const { localStore } = props;

  const addCategory = useCallback(
    (displayName: string) => {
      localStore.addCategory(displayName);
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
          <li key={category.id}>
            <CategoryElement
              category={category}
              deleteCategory={deleteCategory}
            />
          </li>
        ))}
      </SCategories>
    </SContainer>
  );
});

export default CategoriesPage;
