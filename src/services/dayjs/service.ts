import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isoWeek from "dayjs/plugin/isoWeek";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import localizedFormat from "dayjs/plugin/localizedFormat";
import utc from "dayjs/plugin/utc";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import "dayjs/locale/ru";
import "dayjs/locale/en";

import { IDayJsService } from "./types";

dayjs.extend(utc);
dayjs.extend(weekday);
dayjs.extend(weekOfYear);
dayjs.extend(localizedFormat);
dayjs.extend(isoWeek);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(isBetween);
dayjs.locale("en");
dayjs.locale("ru");

class DayJsService implements IDayJsService {
  instance = dayjs;

  setLocale = (preset: string, object?: Partial<ILocale>) => {
    this.instance.locale(preset.toLowerCase(), object);
  };
}

const TemplateDayJsInstance = new DayJsService();

export default TemplateDayJsInstance;
