import { ICategoryDto } from "@/types/business";
import { v4 as uuid } from "uuid";

export const CATEGORIES_MOCK: ICategoryDto[] = [
  {
    id: uuid(),
    name: "Машина",
  },
  {
    id: uuid(),
    name: "Дом",
  },
];
