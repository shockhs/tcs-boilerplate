import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { NumericFormat } from "react-number-format";

import { IProps, InputType } from "./types";
import {
  STextField,
  SNoteField,
  SContainer,
  SNumericFieldContainer,
} from "./style";
import { FieldLabel } from "../FieldLabel";
import { FieldError } from "../FieldError";

const TextFieldImpl: FC<IProps> = (props) => {
  const { label, statePath, errorMessage, inputType, value, onChange } = props;

  const [localValue, setLocalValue] = useState(value);

  const onBlur = useCallback(() => {
    onChange(localValue, statePath);
  }, [localValue, onChange, statePath]);

  const onFocus = useCallback(() => {}, []);

  const handleChange = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      setLocalValue(ev.target.value);
    },
    []
  );

  const handleChangeNumber = useCallback(
    ({ floatValue }: { floatValue: number }) => {
      setLocalValue(floatValue);
    },
    []
  );

  const fieldProps = useMemo(() => {
    return {
      value: localValue,
      onChange: inputType === InputType.number ? undefined : handleChange,
      onValueChange:
        inputType === InputType.number ? handleChangeNumber : undefined,
      onBlur,
      onFocus,
    };
  }, [
    localValue,
    inputType,
    handleChangeNumber,
    handleChange,
    onBlur,
    onFocus,
  ]);

  // check after
  const FieldComponent: any = useMemo(() => {
    switch (inputType) {
      case InputType.number: {
        return NumericFormat;
      }
      case InputType.text: {
        return STextField;
      }
      case InputType.note: {
        return SNoteField;
      }
      default:
        return STextField;
    }
  }, [inputType]);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  if (inputType === InputType.number) {
    return (
      <SContainer>
        {label && <FieldLabel label={label} />}
        <SNumericFieldContainer>
          <FieldComponent {...fieldProps} />
        </SNumericFieldContainer>
        {errorMessage && <FieldError errorMessage={errorMessage} />}
      </SContainer>
    );
  }

  return (
    <SContainer>
      {label && <FieldLabel label={label} />}
      <FieldComponent {...fieldProps} />
      {errorMessage && <FieldError errorMessage={errorMessage} />}
    </SContainer>
  );
};

export const TextField = memo(TextFieldImpl);
