import { action, decorate, observable } from "mobx";
import { v4 as uuid } from "uuid";

import { ICategoryDto, ICostDto } from "@/types/business";
import { ILocalDatabaseStore } from "@/types/stores";
import { CATEGORIES_MOCK } from "./mocks";

export class LocalDatabaseStore implements ILocalDatabaseStore {
  costs: ICostDto[] = [];
  categories: ICategoryDto[] = CATEGORIES_MOCK;
  lastUpdatedAt: number = Date.now();

  addCategory = (name: string) => {
    this.categories.push({
      id: uuid(),
      name,
    });
    this.lastUpdatedAt = Date.now();
  };

  deleteCategory = (id: string) => {
    const categoryIndex = this.categories.findIndex(
      (cateogory) => cateogory.id === id
    );

    if (categoryIndex !== -1) {
      this.categories.splice(categoryIndex, 1);
      this.lastUpdatedAt = Date.now();
    }
  };
}

decorate(LocalDatabaseStore, {
  costs: observable,
  categories: observable,
  lastUpdatedAt: observable,
  addCategory: action,
  deleteCategory: action,
});

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace LocalDatabaseStore {}
