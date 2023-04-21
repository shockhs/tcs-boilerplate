import { guards } from "@/types/guards";
import { dialog } from "@/types/providers";
import { HttpStatusCode } from "@/types/api";

import { ERROR_DICTIONARY } from "./constants";

export class DialogProvider {
  portalData: {
    openPortal: (arg?: any) => void;
    closePortal: (arg?: any) => void;
    setPortalData: (arg?: any) => void;
  } | null = null;

  registerDialog = ({
    openPortal,
    closePortal,
    setPortalData,
  }: {
    openPortal: (arg: any) => void;
    closePortal: (arg: any) => void;
    setPortalData: (arg: any) => void;
  }): void => {
    this.portalData = { openPortal, closePortal, setPortalData };
  };

  show = (props: any): void => {
    this.portalData?.setPortalData(props);
    this.portalData?.openPortal();
  };

  close = (): void => this.portalData?.closePortal();

  showError = (error?: dialog.ErrorResponse | string): void => {
    const type = dialog.DialogType.error;

    if (guards.isString(error)) {
      this.show({ title: "Ошибка", type, content: error });
      return;
    }

    if (!error) {
      this.show({
        type,
        title: "Ошибка сервера",
        content: "Произошла ошибка. Сервер недоступен",
      });
      return;
    }

    const { status = HttpStatusCode.errorInternal, data } = error;
    const title = ERROR_DICTIONARY[status] || "Ошибка";

    const content = guards.isNotNull(data) ? data.message : null;

    this.show({ type, title, content: content || "" });
  };
}

export const CustomDialogProvider = DialogProvider;

const TemplateDialogProviderInstance = new DialogProvider();

export default TemplateDialogProviderInstance;
