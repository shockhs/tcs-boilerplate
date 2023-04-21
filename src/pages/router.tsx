import { FC, memo, useCallback, useEffect } from "react";
import { Routes } from "react-router-dom";

import { Modal } from "@/components/Modal";
import { usePortal } from "@/hooks/usePortal";
import { TemplateDialogProvider } from "@/providers";
import { useRootStyles } from "@/hooks/useRootStyles";

import {
  SOuterContainer,
  SInnerContainer,
  SScrollableContainer,
} from "./styled-components";

const RouterPage: FC = () => {
  const { isOpen, closePortal, openPortal, setPortalData, portalData } =
    usePortal();

  const setDialogRef = useCallback(() => {
    TemplateDialogProvider.registerDialog({
      openPortal,
      closePortal,
      setPortalData,
    });
  }, [closePortal, openPortal, setPortalData]);

  useEffect(() => {
    setDialogRef();
  }, [setDialogRef]);

  useRootStyles();

  return (
    <>
      {isOpen && <Modal>{portalData}</Modal>}
      <SOuterContainer>
        <SScrollableContainer>
          <SInnerContainer>
            <Routes>{null}</Routes>
          </SInnerContainer>
        </SScrollableContainer>
      </SOuterContainer>
    </>
  );
};

export const Router = memo(RouterPage);
