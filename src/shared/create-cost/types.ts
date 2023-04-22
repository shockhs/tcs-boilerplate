import { ICategoryDto, ICreateCostDto } from "@/types/business";

export interface IProps {
  createCost: (dto: ICreateCostDto) => void;
  categories: ICategoryDto[];
}
