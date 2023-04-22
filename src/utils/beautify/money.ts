import BigNumber from "bignumber.js";

import { CURRENCY } from "@/constants/currency";

const moneyIntlInstance = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
  currency: "RUB",
});

export const beautifyMoney = (value: number) =>
  moneyIntlInstance
    .format(new BigNumber(value) as any)
    .replace(CURRENCY.ruble, "")
    .trim();
