import { Optional } from "@/types/utils";

export type DropdownOption = {
  displayName: string;
  id: string;
};

export type Props = {
  errorMessage?: Optional<string>;
  label?: Optional<string>;
  placeholder?: Optional<string>;
  value: any;
  customOptions?: Optional<object>;
  withDefaultOptions?: Optional<boolean>;
  onChange: (value: any, statePath?: Optional<string>) => void;
  searchRequest: (query?: Optional<string>) => Promise<DropdownOption[]>;
  getOptionLabel?: (el: any) => string;
  getOptionValue?: (el: any) => string;
  statePath?: string;
};

export type CustomValueProps = {
  label: string;
  value: string;
};
