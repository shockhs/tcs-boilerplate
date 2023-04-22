import React, {
  useCallback,
  FC,
  memo,
  useState,
  useEffect,
  useMemo,
} from "react";
import { Range } from "react-date-range";

import { FieldLabel } from "@/components/FieldLabel";
import { TemplateDialogProvider } from "@/providers";
import { DayJsService } from "@/services/dayjs";

import { FieldError } from "../FieldError";

import { IProps } from "./types";
import {
  SField,
  SCalendarButton,
  SPickerLabel,
  SDateRangeContainer,
} from "./style";
import { DateRangePicker } from "./date-range";

const DateFieldImpl: FC<IProps> = (props: IProps) => {
  const { label, value, statePath, errorMessage, onChange } = props;

  const [opened, setOpened] = useState(false);

  const toggleCalendarVisible = useCallback(() => {
    setOpened(!opened);
  }, [opened]);

  const handleDismiss = useCallback(() => {
    TemplateDialogProvider.close();
    setOpened(false);
  }, []);

  const handleReset = useCallback(() => {
    onChange(
      {
        start: null,
        end: null,
      },
      statePath
    );
    handleDismiss();
  }, [handleDismiss, onChange, statePath]);

  const handleDateRangeSelect = useCallback(
    (range: Range) => {
      onChange(
        {
          start: range.startDate?.valueOf() || null,
          end: range.endDate?.valueOf() || null,
        },
        statePath
      );
      handleDismiss();
    },
    [handleDismiss, onChange, statePath]
  );

  const buttonLabel = useMemo(() => {
    if (!value.start) {
      return "Все время";
    }

    if (!value.end)
      return DayJsService.instance(value.start).format("DD.MM.YYYY");

    return `${DayJsService.instance(value.start).format(
      "DD.MM.YYYY"
    )} - ${DayJsService.instance(value.end).format("DD.MM.YYYY")}`;
  }, [value]);

  useEffect(() => {
    if (opened) {
      TemplateDialogProvider.show({
        title: "Выбор даты",
        content: (
          <SDateRangeContainer>
            <DateRangePicker
              onDismiss={() => {
                TemplateDialogProvider.close();
                handleDismiss();
              }}
              onConfirm={(range: Range) => {
                TemplateDialogProvider.close();
                handleDateRangeSelect(range);
              }}
              onReset={() => {
                TemplateDialogProvider.close();
                handleReset();
              }}
              value={value}
            />
          </SDateRangeContainer>
        ),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened]);

  return (
    <SField>
      {label && <FieldLabel label={label} />}
      <SCalendarButton onClick={toggleCalendarVisible}>
        <SPickerLabel>{buttonLabel}</SPickerLabel>
      </SCalendarButton>
      {errorMessage && <FieldError errorMessage={errorMessage} />}
    </SField>
  );
};

export const DateField = memo(DateFieldImpl);
