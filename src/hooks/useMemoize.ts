import { useCallback, useEffect, useRef, useMemo } from "react";

import { IS_DEVELOPMENT } from "@/constants/application";
import { AnyFunction, Optional } from "@/types/utils";

const isPrimitive = (value: any) => {
  return !value || /^[sbn]/.test(typeof value);
};

const checkDeps = (deps: any[], depsAreEqual: AnyFunction, name: string) => {
  const reactHookName = `React.${name.replace(/CustomCompare/, "")}`;

  if (!(deps instanceof Array) || deps.length === 0) {
    console.warn(
      `${name} should not be used with no dependencies. Use ${reactHookName} instead.`
    );
  }
  if (deps.every(isPrimitive)) {
    console.warn(
      `${name} should not be used with dependencies that are all primitive values. Use ${reactHookName} instead.`
    );
  }
  if (typeof depsAreEqual !== "function") {
    console.warn(
      `${name} should be used with depsEqual callback for comparing deps list`
    );
  }
};

const useCustomCompareMemoize = (deps: any[], depsAreEqual: AnyFunction) => {
  const ref = useRef<Optional<any[]>>(undefined);

  if (!ref.current || !depsAreEqual(ref.current, deps)) {
    ref.current = deps;
  }

  return ref.current;
};

export const useCustomCompareCallback = (
  callback: AnyFunction,
  deps: any[],
  depsEqual: AnyFunction
) => {
  if (!IS_DEVELOPMENT) {
    checkDeps(deps, depsEqual, "useCustomCompareCallback");
  }

  return useCallback(callback, useCustomCompareMemoize(deps, depsEqual));
};

export const useCustomCompareEffect = (
  effect: AnyFunction,
  deps: any[],
  depsAreEqual: AnyFunction
) => {
  if (!IS_DEVELOPMENT) {
    checkDeps(deps, depsAreEqual, "useCustomCompareEffect");
  }

  useEffect(effect, useCustomCompareMemoize(deps, depsAreEqual));
};

export const useCustomCompareMemo = (
  factory: AnyFunction,
  deps: any[],
  depsAreEqual: AnyFunction
) => {
  if (!IS_DEVELOPMENT) {
    checkDeps(deps, depsAreEqual, "useCustomCompareMemo");
  }

  return useMemo(factory, useCustomCompareMemoize(deps, depsAreEqual));
};
