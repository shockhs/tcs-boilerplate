import React, { FC, useCallback } from "react";
import { observer } from "mobx-react";

import { AddCategoryForm } from "@/shared/add-category";
import { CategoryElement } from "@/shared/category-element";

import { SCategories, SContainer, SHeader, STableTitle } from "./style";
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
        <thead>
          <SHeader>
            <th>
              <STableTitle>Отображаемое имя</STableTitle>
            </th>
            <th>
              <STableTitle>Действия</STableTitle>
            </th>
          </SHeader>
        </thead>
        <tbody>
          {[...localStore.categories].map((category) => (
            <CategoryElement
              key={category.id}
              category={category}
              deleteCategory={deleteCategory}
            />
          ))}
        </tbody>
      </SCategories>
    </SContainer>
  );
});

export default CategoriesPage;
