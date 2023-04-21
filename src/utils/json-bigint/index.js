import { jsonParse } from "./parse";
import { jsonStringify } from "./stringify";

const jsobBigInt = (options) => {
  return {
    parse: jsonParse(options),
    stringify: jsonStringify.stringify,
  };
};

export const parse = jsonParse();
export const stringify = jsonStringify.stringify;

export default jsobBigInt;
