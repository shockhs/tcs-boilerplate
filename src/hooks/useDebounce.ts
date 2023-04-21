import debounce from "lodash/debounce";
import { useRef, useCallback, useEffect, useState } from "react";

import { AnyFunction } from "@/types/utils";

import { useIsMounted } from "./useIsMounted";

export const useDebounceCallback = (cb: AnyFunction, delay: number) => {
  const inputsRef = useRef({ cb, delay });
  const isMounted = useIsMounted();

  useEffect(() => {
    inputsRef.current = { cb, delay };
  }); //also track cur. delay

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(
    debounce((...args) => {
      // Debounce is an async callback. Cancel it, if in the meanwhile
      // (1) component has been unmounted (see isMounted in snippet)
      // (2) delay has changed
      if (inputsRef.current.delay === delay && isMounted())
        inputsRef.current.cb(...args);
    }, delay),
    [delay, debounce]
  );
};

export const useDebounceValue = (value: string, delay: number): string => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return (): void => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return debouncedValue;
};
