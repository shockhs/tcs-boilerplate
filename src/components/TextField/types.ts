import { Optional } from "@/types/utils";

export enum InputType {
  number = "number",
  text = "text",
  note = "note",
}

export interface IProps {
  inputType?: Optional<InputType>;
  value: string;
  onChange: (newValue: string, statePath?: Optional<string>) => void;
  label?: Optional<string>;
  errorMessage?: Optional<string>;
  statePath?: Optional<string>;
}
