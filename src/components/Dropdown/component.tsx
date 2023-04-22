import { FC, memo, useCallback, useEffect, useMemo, useState } from "react";
import { InputActionMeta, SingleValue } from "react-select";
import Select from "react-select";
import { debounce } from "lodash";
import { getOptionLabel, getOptionValue } from "./utils";
import { DropdownOption, Props } from "./types";
import { getCustomStyles, SField } from "./style";
import { FieldLabel } from "../FieldLabel";
import { FieldError } from "../FieldError";

const DEBOUNCE_TIMEOUT = 500;

const DropdownDefault: FC<Props> = (props) => {
  const {
    label,
    statePath,
    placeholder,
    value,
    onChange,
    errorMessage,
    searchRequest,
    customOptions,
    withDefaultOptions,
    getOptionLabel: propsGetOptionLabel,
    getOptionValue: propsGetOptionValue,
  } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<DropdownOption[]>([]);

  const onChangeSelect = useCallback(
    (newValue?: SingleValue<DropdownOption>) => {
      if (!newValue) {
        onChange(null, statePath);
        return;
      }

      const optionData = options.find(
        (el) => newValue.id === (propsGetOptionValue || getOptionValue)(el)
      );

      setInputValue("");
      onChange(optionData, statePath);
    },
    [options, onChange, statePath, propsGetOptionValue]
  );

  const loadOptions = useCallback(
    async (inputValue) => {
      if (!inputValue) return;

      setIsLoading(true);

      const newOptions = (await searchRequest(inputValue)) || [];

      setOptions(newOptions);
      setIsLoading(false);
    },
    [searchRequest]
  );

  const formattedValue: DropdownOption | null = useMemo(() => {
    if (!value) return null;

    return {
      id: (propsGetOptionValue || getOptionValue)(value),
      displayName: (propsGetOptionLabel || getOptionLabel)(value),
    };
  }, [propsGetOptionLabel, propsGetOptionValue, value]);

  const initControl = useCallback(async () => {
    if (!formattedValue && !withDefaultOptions) return;

    setIsLoading(true);

    const newOptions = (await searchRequest(formattedValue?.displayName)) || [];

    setOptions(newOptions);
    setIsLoading(false);
  }, [searchRequest, formattedValue, withDefaultOptions]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedLoadOptions = useCallback(
    debounce(loadOptions, DEBOUNCE_TIMEOUT),
    [loadOptions]
  );

  const handleChangeInput = useCallback((newValue, meta: InputActionMeta) => {
    if (meta.action === "input-change") {
      setInputValue(newValue);
    }
  }, []);

  const customStyles = useMemo(
    () => getCustomStyles(errorMessage),
    [errorMessage]
  );

  useEffect(() => {
    debouncedLoadOptions(inputValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  useEffect(() => {
    initControl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SField>
      {label && <FieldLabel label={label} />}
      <Select
        options={options}
        styles={customStyles}
        inputValue={inputValue}
        onInputChange={handleChangeInput}
        value={
          formattedValue
            ? options.find(
                (el) => el.displayName === formattedValue.displayName
              )
            : null
        }
        filterOption={(option: any) => {
          return option;
        }}
        onChange={onChangeSelect}
        components={customOptions ? customOptions : undefined}
        isLoading={isLoading}
        placeholder={placeholder || "Не выбрано"}
        noOptionsMessage={() => `Ничего не найдено`}
        getOptionValue={propsGetOptionValue || getOptionValue}
        getOptionLabel={propsGetOptionLabel || getOptionLabel}
      />
      {errorMessage && <FieldError errorMessage={errorMessage} />}
    </SField>
  );
};

export const Dropdown = memo(DropdownDefault);
