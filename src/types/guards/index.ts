import { default as isNull } from "./isNull";
import { isNotNull } from "./isNotNull";
import { default as isDate } from "./isDate";
import { default as isFunction } from "./isFunction";
import { default as isObject, isGenericObject } from "./isObject";
import { default as isNumber } from "./isNumber";
import { isArray } from "./isArray";
import { isNonEmptyString, isString } from "./isString";
import { default as isUndefined } from "./isUndefined";
import { default as isBoolean } from "./isBoolean";
import { default as isEnumMember } from "./isEnumMember";

export const guards = {
  isNonEmptyString,
  isString,
  isUndefined,
  isArray,
  isBoolean,
  isObject,
  isDate,
  isFunction,
  isGenericObject,
  isNotNull,
  isNull,
  isEnumMember,
  isNumber,
};
