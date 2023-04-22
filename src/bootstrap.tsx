import { useCallback, useEffect } from "react";
import { Template } from "@/pages";
import { AgentService } from "@/services/agent";
import { AdapterType } from "@/adapters/types";
import { AppContext } from "@/contexts/app";
import * as providers from "@/types/providers";
import { usePortal } from "@/hooks/usePortal";
import { Dialog } from "@/components/Dialog";
import { Modal } from "@/components/Modal";

import { GlobalStyle } from "./styles/globaStyle";

import "@/utils/hack-timer";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

export const Bootstrap = () => {
  const { isOpen, closePortal, openPortal, setPortalData, portalData } =
    usePortal();

  const initAgent = useCallback(() => {
    AgentService.initAgent(AdapterType.common, { setPortalData, openPortal });
  }, [openPortal, setPortalData]);

  const onDismissDialog = useCallback(() => {
    setPortalData(null);
    closePortal();
  }, [closePortal, setPortalData]);

  useEffect(() => initAgent(), [initAgent]);

  return (
    <>
      <GlobalStyle />
      {isOpen && (
        <Modal>
          <Dialog
            type={providers.dialog.DialogType.error}
            onDismiss={onDismissDialog}
            errorData={portalData}
          />
        </Modal>
      )}
      <AppContext.Provider>
        <Template />
      </AppContext.Provider>
    </>
  );
};
