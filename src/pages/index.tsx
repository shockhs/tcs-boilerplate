import { FC, memo } from "react";
import { BrowserRouter } from "react-router-dom";

import { BASE_PATH } from "@/constants/application";

import { Router } from "./router";

const TemplatePage: FC = () => {
  return (
    <BrowserRouter basename={BASE_PATH}>
      <Router />
    </BrowserRouter>
  );
};

export const Template = memo(TemplatePage);
