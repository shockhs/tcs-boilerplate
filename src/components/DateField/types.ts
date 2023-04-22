import { Nullable, Optional } from "@/types/utils";
import { Range } from "react-date-range";

export type DateFieldValue = {
  start: Nullable<number>;
  end: Nullable<number>;
};

export interface IProps {
  statePath?: Optional<string>;
  errorMessage?: Optional<string>;
  label?: Optional<string>;
  value: DateFieldValue;
  onChange: (newValue: DateFieldValue, statePath?: Optional<string>) => void;
}

export interface IDateRangeProps {
  onDismiss: () => void;
  onReset: () => void;
  onConfirm: (state: Range) => void;
  value: {
    start?: number | null;
    end?: number | null;
  };
}
