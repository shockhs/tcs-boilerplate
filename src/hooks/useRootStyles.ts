import { useCallback, useEffect } from "react";

import { getScrollbarWidth } from "@/utils";

export const useRootStyles = () => {
  const setApplicationRootVariables = useCallback(() => {
    const doc = document.documentElement;

    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
    doc.style.setProperty("--app-scrollbar-width", `${getScrollbarWidth()}px`);
  }, []);

  useEffect(() => {
    setApplicationRootVariables();
  }, [setApplicationRootVariables]);
};
