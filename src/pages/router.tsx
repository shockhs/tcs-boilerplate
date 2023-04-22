import { FC, memo, useCallback, useEffect, useMemo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { observer } from "mobx-react";

import { Modal } from "@/components/Modal";
import { usePortal } from "@/hooks/usePortal";
import { TemplateDialogProvider } from "@/providers";
import { useRootStyles } from "@/hooks/useRootStyles";

import {
  SOuterContainer,
  SInnerContainer,
  SScrollableContainer,
} from "./style";
import { HeaderComponent } from "@/components/Header";
import { navigation } from "@/types/providers";
import { CostsPage } from "./costs";
import { CategoriesPage } from "./categories";
import { LocalDatabaseStore } from "@/stores/local-database";
import { StatsPage } from "./stats";

const RouterPage: FC = observer(() => {
  const localStore = useMemo(() => {
    return new LocalDatabaseStore();
  }, []);

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
      {isOpen && (
        <Modal>{portalData.content ? portalData.content : portalData}</Modal>
      )}
      <SOuterContainer>
        <HeaderComponent />
        <SScrollableContainer>
          <SInnerContainer>
            <Routes>
              <Route
                path={navigation.NavigationRoutes.categories}
                element={<CategoriesPage localStore={localStore} />}
              />
              <Route
                path={navigation.NavigationRoutes.costs}
                element={<CostsPage localStore={localStore} />}
              />
              <Route
                path={navigation.NavigationRoutes.stats}
                element={<StatsPage localStore={localStore} />}
              />
              <Route
                path="*"
                element={
                  <Navigate to={navigation.NavigationRoutes.stats} replace />
                }
              />
            </Routes>
          </SInnerContainer>
        </SScrollableContainer>
      </SOuterContainer>
    </>
  );
});

export const Router = memo(RouterPage);
