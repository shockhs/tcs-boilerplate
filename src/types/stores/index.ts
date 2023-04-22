import { ICostDto, ICategoryDto } from "../business";

export interface ILocalDatabaseStore {
  costs: ICostDto[];
  categories: ICategoryDto[];
  lastUpdatedAt: number;
  addCategory: (name: string) => void;
  deleteCategory: (name: string) => void;
}
