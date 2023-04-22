import { ICategoryDto, ICostDto } from "@/types/business";
import { v4 as uuid } from "uuid";

export const CATEGORIES_MOCK: ICategoryDto[] = [
  {
    id: uuid(),
    displayName: "Машина",
  },
  {
    id: uuid(),
    displayName: "Дом",
  },
];

export const COSTS_MOCK: ICostDto[] = [
  {
    id: uuid(),
    displayName: "Мойка 1",
    categoryId: CATEGORIES_MOCK[0].id,
    costValue: 5400,
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    displayName: "Мойка 2",
    categoryId: CATEGORIES_MOCK[0].id,
    costValue: 333,
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    displayName: "Продукты 1",
    categoryId: CATEGORIES_MOCK[1].id,
    costValue: 555,
    createdAt: Date.now(),
  },
  {
    id: uuid(),
    displayName: "Продукты 2",
    categoryId: CATEGORIES_MOCK[1].id,
    costValue: 1000,
    createdAt: Date.now(),
  },
];
