import { FC, memo, useMemo } from "react";

import { SContainer, SOverlay } from "./styled-components";
import { IProps } from "./types";

const DialogDefault: FC<IProps> = (props) => {
  const { type, onDismiss } = props;

  const content = useMemo(() => {
    switch (type) {
      default:
        return null;
    }
  }, [type]);

  return (
    <>
      <SOverlay onClick={onDismiss} />
      <SContainer>{content}</SContainer>
    </>
  );
};

export const Dialog = memo(DialogDefault);
