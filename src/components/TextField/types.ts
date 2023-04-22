import { Optional } from "@/types/utils";

export enum InputType {
  number = "number",
  text = "text",
  note = "note",
}

export interface IProps {
  inputType?: Optional<InputType>;
  value: string | number;
  onChange: (newValue: any, statePath?: Optional<string>) => void;
  label?: Optional<string>;
  errorMessage?: Optional<string>;
  statePath?: Optional<string>;
}
