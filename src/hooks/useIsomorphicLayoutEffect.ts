import { useEffect, useLayoutEffect } from "react";

import { guards } from "@/types/guards";

const useIsomorphicLayoutEffect = !guards.isUndefined(typeof window)
  ? useLayoutEffect
  : useEffect;

export { useIsomorphicLayoutEffect };
