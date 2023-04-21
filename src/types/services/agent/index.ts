import { Optional } from "@/types/utils";
import { AxiosRequestConfig } from "axios";

export interface IAgentService {
  requests: {
    abort(controllerData: ControllerData): void;
    get(path: string, options: Optional<AxiosRequestConfig>): Promise<any>;
    post(
      path: string,
      body: any,
      options: Optional<AxiosRequestConfig>
    ): Promise<any>;
    put(
      path: string,
      body: any,
      options: Optional<AxiosRequestConfig>
    ): Promise<any>;
    delete(path: string, options: Optional<AxiosRequestConfig>): Promise<any>;
  };
}

export enum RequestMethods {
  "GET" = "get",
  "POST" = "post",
  "PUT" = "put",
  "DELETE" = "delete",
}

export type ControllerData = {
  method: RequestMethods;
  path: string;
  options?: Optional<AxiosRequestConfig>;
  body?: Optional<any>;
};

export type AbortRequestData = {
  controller: AbortController;
  data: any;
};

export type ModalProps = {
  setPortalData: (data: any) => void;
  openPortal: () => void;
};

export type RequestResponseType = any;

export type RequestResponseDataType = any;

export type RequestResponseParams = any;
