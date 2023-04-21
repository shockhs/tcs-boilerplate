import { AxiosRequestConfig } from "axios";

import { services } from "@/types";
import { Optional } from "@/types/utils";

export type AdapterResponse = {
  data: {
    method: services.agent.RequestMethods;
    path: string;
    body?: Optional<any>;
    options?: Optional<AxiosRequestConfig>;
  };
  promise: () => Promise<any>;
};

export interface IAdapter {
  // app: {
  //   checkAccess(params: services.agent.RequestResponseParams): AdapterResponse;
  // };
}

export interface IAdapterMapper {
  // app: {
  //   checkAccess(
  //     response: services.agent.RequestResponseType
  //   ): services.agent.AppCheckAccessResponseData;
  // };
}

export enum AdapterType {
  "common" = "CommonAdapter",
}
