import { Nullable, Optional } from "../utils";

export enum DataType {
  anyPrimitive = "anyPrimitive",
  url = "url",
  email = "email",
  text = "text",
  number = "number",
  array = "array",
  object = "object",
  phone = "phone",
}

export type ElementMetadata = {
  minLength?: number;
  minValue?: number;
};

export type ElementType = {
  type: DataType;
  statePath: string;
  value?: Optional<Nullable<any>>;
  metadata?: Optional<ElementMetadata>;
};
