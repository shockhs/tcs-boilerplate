import React, { FC, memo } from "react";

import { IProps } from "./types";
import { SError } from "./style";

const FieldErrorImpl: FC<IProps> = (props) => {
  const { errorMessage } = props;

  return <SError>{errorMessage}</SError>;
};

export const FieldError = memo(FieldErrorImpl);
