import { DateFieldValue } from "@/components/DateField/types";
import { ILocalDatabaseStore } from "@/types/stores";
import { Nullable } from "@/types/utils";

export interface IProps {
  localStore: ILocalDatabaseStore;
}

export type FiltersState = {
  categoryId: Nullable<string>;
  dateRange: DateFieldValue;
};
