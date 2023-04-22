import React, { FC, memo } from "react";

import { IProps } from "./types";
import { SLabel } from "./style";

const FieldLabelImpl: FC<IProps> = (props) => {
  const { label } = props;

  return <SLabel>{label}</SLabel>;
};

export const FieldLabel = memo(FieldLabelImpl);
