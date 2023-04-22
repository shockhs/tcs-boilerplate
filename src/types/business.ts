import { Nullable } from "./utils";

export interface ICostDto {
  id: string;
  displayName: string;
  createdAt: number;
  costValue: number;
  categoryId: Nullable<string>;
}

export interface ICreateCostDto {
  displayName: string;
  costValue: number;
  categoryId: Nullable<string>;
}

export interface ICategoryDto {
  id: string;
  name: string;
}
