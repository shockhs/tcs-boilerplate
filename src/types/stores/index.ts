import { ICostDto, ICategoryDto, ICreateCostDto } from "../business";

export interface ILocalDatabaseStore {
  costs: ICostDto[];
  categories: ICategoryDto[];
  lastUpdatedAt: number;
  addCategory: (name: string) => void;
  deleteCategory: (id: string) => void;
  createCost: (dto: ICreateCostDto) => void;
  deleteCost: (id: string) => void;
}
