import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { isEqual } from 'lodash';

import { API_ROOT } from '@/constants/api';
import { agent } from '@/types/services';
import { guards } from '@/types/guards';
import { CommonAdapter, IAdapter, AdapterType } from '@/adapters';
import { AnyFunction } from '@/types/utils';

class AgentService implements agent.IAgentService {
  private templateModalProps: agent.ModalProps | null = null;

  private axiosInstance: AxiosInstance | null = null;

  private controllers: agent.AbortRequestData[] = [];

  private adapter: IAdapter = new CommonAdapter();

  private agentInitializationPromiseResolve: null | AnyFunction = null;

  private agentInitializationPromise = new Promise((resolve: AnyFunction) => {
    this.agentInitializationPromiseResolve = resolve;
  });

  initAgent = (
    adapterType: AdapterType,
    templateModalProps: agent.ModalProps
  ) => {
    this.templateModalProps = templateModalProps;
    this.axiosInstance = axios.create({
      headers: {},
      baseURL: API_ROOT,
    });

    this.initAdapter(adapterType);
    this.agentInitializationPromiseResolve?.();
  };

  initAdapter = (adapterType: AdapterType) => {
    switch (adapterType) {
      case AdapterType.common: {
        this.adapter = new CommonAdapter();
        break;
      }
      default: {
        this.adapter = new CommonAdapter();
        break;
      }
    }
  };

  handleError(error: AxiosError) {
    let errorMessage =
      error.response?.data?.message || error.message || 'Ошибка';

    if (guards.isString(error.response?.data)) {
      errorMessage = error.response?.data;
    }

    this.templateModalProps?.setPortalData({
      title: `Серверная ошибка. Статус ${error.response?.status || 500}`,
      description: errorMessage,
    });
    this.templateModalProps?.openPortal();

    return {
      data: null,
      error: errorMessage,
    };
  }

  requests = {
    abort: (controllerData: agent.ControllerData) => {
      const sentRequestIndex = this.controllers.findIndex((el) =>
        isEqual(el.data, controllerData)
      );

      if (sentRequestIndex !== -1) {
        this.controllers[sentRequestIndex].controller.abort();
        this.controllers.splice(sentRequestIndex, 1);
      }
    },
    get: async (
      path: string,
      options: AxiosRequestConfig<any> | undefined = {}
    ): Promise<any> => {
      return Promise.all([this.agentInitializationPromise]).then(() => {
        if (!this.axiosInstance) return;

        const controller = new AbortController();

        this.controllers.push({
          controller,
          data: {
            method: agent.RequestMethods.GET,
            path,
            options,
          },
        });

        return this.axiosInstance.get(path, {
          ...options,
          signal: controller.signal,
        });
      });
    },
    post: async (
      path: string,
      body: any,
      options: AxiosRequestConfig<any> | undefined = {}
    ): Promise<any> => {
      return Promise.all([this.agentInitializationPromise]).then(() => {
        if (!this.axiosInstance) return;

        const controller = new AbortController();

        this.controllers.push({
          controller,
          data: {
            method: agent.RequestMethods.POST,
            path,
            body,
            options,
          },
        });

        return this.axiosInstance.post(path, body, {
          ...options,
          signal: controller.signal,
        });
      });
    },
    put: async (
      path: string,
      body: any,
      options: AxiosRequestConfig<any> | undefined = {}
    ): Promise<any> => {
      return Promise.all([this.agentInitializationPromise]).then(() => {
        if (!this.axiosInstance) return;

        const controller = new AbortController();

        this.controllers.push({
          controller,
          data: {
            method: agent.RequestMethods.PUT,
            path,
            body,
            options,
          },
        });

        return this.axiosInstance.put(path, body, {
          ...options,
          signal: controller.signal,
        });
      });
    },
    delete: async (
      path: string,
      options: AxiosRequestConfig<any> | undefined = {}
    ): Promise<any> => {
      return Promise.all([this.agentInitializationPromise]).then(() => {
        if (!this.axiosInstance) return;

        const controller = new AbortController();

        this.controllers.push({
          controller,
          data: {
            method: agent.RequestMethods.DELETE,
            path,
            options,
          },
        });

        return this.axiosInstance.delete(path, {
          ...options,
          signal: controller.signal,
        });
      });
    },
  };

  // app = {
  //   checkAccess: {
  //     request: async (
  //       params: agent.AppCheckAccessParams
  //     ): Promise<agent.AppCheckAccessPromise> => {
  //       if (!this.axiosInstance)
  //         return { success: false, error: "Агент не был инициализирован" };

  //       try {
  //         const { success }: agent.AppCheckAccessResponseData =
  //           await this.adapter.app.checkAccess(params).promise();

  //         return { success, error: null };
  //       } catch (e: any) {
  //         return this.handleError(
  //           e as AxiosError
  //         ) as agent.AppCheckAccessPromise;
  //       }
  //     },
  //     abort: async (params: agent.AppCheckAccessParams) => {
  //       const { path, body, options, method } =
  //         this.adapter.app.checkAccess(params).data;
  //       this.requests.abort({
  //         method,
  //         path,
  //         body,
  //         options: options || {},
  //       });
  //     },
  //   },
  // };
}

const TemplateAgentServiceInstance = new AgentService();

export default TemplateAgentServiceInstance;
