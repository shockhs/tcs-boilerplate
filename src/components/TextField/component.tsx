import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { NumberFormatBase } from "react-number-format";

import { IProps, InputType } from "./types";
import { STextField, SNoteField, SContainer } from "./style";
import { FieldLabel } from "../FieldLabel";
import { FieldError } from "../FieldError";

const TextFieldImpl: FC<IProps> = (props) => {
  const { label, errorMessage, inputType, value, onChange } = props;

  const [localValue, setLocalValue] = useState(value);

  const onBlur = useCallback(() => {
    onChange(localValue);
  }, [localValue, onChange]);

  const onFocus = useCallback(() => {}, []);

  const handleChange = useCallback((ev) => {
    setLocalValue(ev.target.value);
  }, []);

  const fieldProps = useMemo(() => {
    return {
      value: localValue,
      onChange: handleChange,
      onBlur,
      onFocus,
    };
  }, [onBlur, onFocus, handleChange, localValue]);

  // check after
  const FieldComponent: any = useMemo(() => {
    switch (inputType) {
      case InputType.number: {
        return NumberFormatBase;
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

  return (
    <SContainer>
      {label && <FieldLabel label={label} />}
      <FieldComponent {...fieldProps} />
      {errorMessage && <FieldError errorMessage={errorMessage} />}
    </SContainer>
  );
};

export const TextField = memo(TextFieldImpl);
