import { Nullable } from "../utils";

export enum DialogType {
  error = "ERROR",
}

export type ErrorResponse = {
  status: number;
  data: Nullable<{ message: string }>;
};

export enum ContentTypes {}
