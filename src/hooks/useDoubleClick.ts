import { useCallback, useRef } from "react";

import { AnyFunction, Optional } from "@/types/utils";

/**
 * @param {clickEvent} doubleClick
 * @param {clickEvent} [click]
 * @param {UseDoubleClickOptions} [options]
 * @returns {clickEvent}
 */
export const useDoubleClick = (
  doubleClick: AnyFunction,
  click: AnyFunction,
  options?: Optional<any>
) => {
  /** @type {UseDoubleClickOptions} */
  options = {
    timeout: 200,
    ...options,
  };

  /** @type {{ current: number }} */
  const clickTimeout = useRef();

  const clearClickTimeout = () => {
    if (clickTimeout) {
      clearTimeout(clickTimeout.current);

      // @ts-expect-error типизация некорректная
      clickTimeout.current = null;
    }
  };

  return useCallback(
    (event, ...args) => {
      clearClickTimeout();
      if (click && /** @type {React.UIEvent} */ event.detail === 1) {
        // @ts-expect-error типизация некорректная
        clickTimeout.current = setTimeout(() => {
          click(event, ...args);
        }, options.timeout);
      }
      if (/** @type {React.UIEvent} */ event.detail % 2 === 0) {
        doubleClick(event, ...args);
      }
    },
    [click, doubleClick, options.timeout]
  );
};

/**
 * @callback clickEvent
 * @param {React.SyntheticEvent} [event]
 */

/**
 * @typedef {Object} UseDoubleClickOptions
 * @prop {number} [timeout]
 */
