import { BrowserName } from "@/types/enviroments";

export const getBrowserName = () => {
  const userAgent = navigator.userAgent;

  if (userAgent.match(/chrome|chromium|crios/i)) {
    return BrowserName.chrome;
  }

  if (userAgent.match(/firefox|fxios/i)) {
    return BrowserName.firefox;
  }

  if (userAgent.match(/safari/i)) {
    return BrowserName.safari;
  }

  if (userAgent.match(/opr\//i)) {
    return BrowserName.opera;
  }

  if (userAgent.match(/edg/i)) {
    return BrowserName.edge;
  }

  return BrowserName.unknown;
};
