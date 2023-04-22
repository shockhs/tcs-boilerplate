import { Optional } from "./utils";

export interface ICostDto {
  id: string;
  displayName: string;
  createdAt: number;
  costValue: number;
  categoryId?: Optional<string>;
}

export interface ICategoryDto {
  id: string;
  name: string;
}
