import { AdapterMapper } from "../mapper";
import { AdapterType, IAdapter } from "../types";

class CommonAdapter implements IAdapter {
  mapper = new AdapterMapper(AdapterType.common);

  // app = {
  //   checkAccess: (params: services.agent.AppCheckAccessParams) => {
  //     const reqData = {
  //       method: services.agent.RequestMethods.POST,
  //       path: PATHS.app.checkAccess(),
  //       body: params,
  //     };

  //     return {
  //       promise: () =>
  //         AgentService.requests
  //           .post(reqData.path, reqData.body)
  //           .then(this.mapper.app.checkAccess),
  //       data: reqData,
  //     };
  //   },
  // };
}

export { CommonAdapter };
