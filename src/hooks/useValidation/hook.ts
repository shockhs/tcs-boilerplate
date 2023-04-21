import { useMemo, useState, useCallback } from "react";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";

import { ElementType } from "@/types/hooks/useValidation";

import { getInvalidFields } from "./utils";

interface IProps {
  elements: ElementType[];
}

export const useValidation = (props: IProps) => {
  const { elements } = props;

  const [errorFields, setErrorFields] = useState<Record<string, string>>({});

  const requiredFields = useMemo(
    () =>
      elements.reduce((acc, element) => {
        acc[element.statePath] = true;

        return acc;
      }, {} as Record<string, boolean>),
    [elements]
  );

  const getErrorMessage = useCallback(
    (key) => {
      return get(errorFields, key) || null;
    },
    [errorFields]
  );
  const getRequiredStatus = useCallback(
    (key) => get(requiredFields, key),
    [requiredFields]
  );

  const isValid = useCallback(() => {
    setErrorFields({});

    try {
      const invalidFields = getInvalidFields(elements);

      if (!isEmpty(invalidFields)) {
        setErrorFields(invalidFields);

        return false;
      }
    } catch (e: any) {
      return false;
    }

    return true;
  }, [elements]);

  const clearValidation = useCallback(() => {
    setErrorFields({});
  }, []);

  return {
    isValid,
    errorFields,
    clearValidation,
    getErrorMessage,
    getRequiredStatus,
  };
};
