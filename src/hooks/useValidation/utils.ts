import isEmpty from "lodash/isEmpty";

import { Nullable } from "@/types/utils";
import { guards } from "@/types/guards";
import { ElementType, DataType } from "@/types/hooks/useValidation";

import {
  EMAIL_REGEXP,
  ERROR_MESSAGES,
  PHONE_NUMBER_LENGTH,
  SITE_URL_REGEXP,
} from "./constants";

export const validateField = (
  data: ElementType
): { isCorrect: boolean; errorMessage: Nullable<string> } => {
  const { type, value, metadata } = data;

  const { minLength, minValue } = metadata || {};

  switch (type) {
    case DataType.array: {
      const hasValue = value && Array.isArray(value);

      if (!hasValue)
        return {
          isCorrect: false,
          errorMessage: ERROR_MESSAGES.required,
        };

      const hasMinimalLength = minLength
        ? value.length >= minLength
        : value.length > 0;

      return {
        isCorrect: hasMinimalLength,
        errorMessage: !hasMinimalLength ? ERROR_MESSAGES.required : null,
      };
    }
    case DataType.text: {
      if (!guards.isString(value) || value.length === 0) {
        return {
          isCorrect: false,
          errorMessage: ERROR_MESSAGES.required,
        };
      }

      return { isCorrect: true, errorMessage: null };
    }
    case DataType.anyPrimitive: {
      const isCorrect = !guards.isNull(value) && !guards.isUndefined(value);

      return {
        isCorrect,
        errorMessage: !isCorrect ? ERROR_MESSAGES.required : null,
      };
    }
    case DataType.number: {
      const isCorrect = guards.isNumber(value);

      if (!isCorrect)
        return {
          isCorrect: false,
          errorMessage: ERROR_MESSAGES.required,
        };

      const hasMinimalValue = guards.isNumber(minValue)
        ? value > minValue
        : true;

      return {
        isCorrect: hasMinimalValue,
        errorMessage: !hasMinimalValue
          ? `${ERROR_MESSAGES.minValue} ${minValue}`
          : null,
      };
    }
    case DataType.object: {
      const isCorrect = value && guards.isObject(value) && !isEmpty(value);

      return {
        isCorrect,
        errorMessage: !isCorrect ? ERROR_MESSAGES.required : null,
      };
    }
    case DataType.phone: {
      const hasValue = guards.isString(value) && value.length > 0;
      const isCorrect =
        hasValue && value.replace(/\D/g, "").length === PHONE_NUMBER_LENGTH;

      const errorMessage = hasValue
        ? ERROR_MESSAGES.incorrectFormat
        : ERROR_MESSAGES.required;

      return {
        isCorrect,
        errorMessage: !isCorrect ? errorMessage : null,
      };
    }
    case DataType.url: {
      const hasValue = guards.isString(value) && value.length > 0;
      const isCorrect = hasValue && SITE_URL_REGEXP.test(value);

      const errorMessage = hasValue
        ? ERROR_MESSAGES.incorrectFormat
        : ERROR_MESSAGES.required;

      return {
        isCorrect,
        errorMessage: !isCorrect ? errorMessage : null,
      };
    }
    case DataType.email: {
      const hasValue = guards.isString(value) && value.length > 0;
      const isCorrect = hasValue && EMAIL_REGEXP.test(value);

      const errorMessage = hasValue
        ? ERROR_MESSAGES.incorrectFormat
        : ERROR_MESSAGES.required;

      return {
        isCorrect,
        errorMessage: !isCorrect ? errorMessage : null,
      };
    }
  }
};

export const getInvalidFields = (data: ElementType[]) => {
  const invalidFields: Record<string, string> = {};

  data.forEach((fieldData) => {
    const { isCorrect, errorMessage } = validateField(fieldData);

    if (!isCorrect) {
      invalidFields[fieldData.statePath] =
        errorMessage || ERROR_MESSAGES.required;
    }
  });

  return invalidFields;
};
