import BigNumber from "bignumber.js";

export const beautifyNumber = (value: BigNumber.Value) => {
  return new BigNumber(value || 0).toFixed(2).replace(".00", "");
};
