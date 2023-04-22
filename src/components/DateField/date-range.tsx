import { FC, memo, useCallback, useState } from "react";
import { DateRange, Range } from "react-date-range";
//@ts-expect-error this is good!
import * as locales from "react-date-range/dist/locale";

import { SButton, SDateRangeContent, SDateRangeDialogFooter } from "./style";
import { IDateRangeProps } from "./types";

const DateRangePickerImpl: FC<IDateRangeProps> = (props) => {
  const { onDismiss, onConfirm, onReset, value } = props;

  const [state, setState] = useState<Range[]>([
    {
      startDate: value.start ? new Date(value.start) : new Date(),
      endDate: value.end ? new Date(value.end) : undefined,
      key: "selection",
    },
  ]);

  const handleConfirm = useCallback(() => {
    onConfirm(state[0]);
  }, [onConfirm, state]);

  return (
    <SDateRangeContent>
      <DateRange
        dateDisplayFormat="dd.MM.yyyy"
        editableDateInputs={true}
        endDatePlaceholder="До"
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        locale={locales["ru"] as any}
      />
      <SDateRangeDialogFooter>
        <SButton onClick={onReset}>Сбросить</SButton>
        <SButton onClick={onDismiss}>Отменить</SButton>
        <SButton onClick={handleConfirm}>Сохранить</SButton>
      </SDateRangeDialogFooter>
    </SDateRangeContent>
  );
};

export const DateRangePicker = memo(DateRangePickerImpl);
