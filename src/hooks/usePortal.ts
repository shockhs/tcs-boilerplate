import { useState, useCallback } from "react";

import { Optional } from "@/types/utils";

export type PortalData = {
  closePortal: () => void;
  openPortal: () => void;
  setPortalData: (params?: Optional<any>) => void;
  portalData: any;
  isOpen: boolean;
};

export const usePortal = (): PortalData => {
  const [isOpen, setIsOpened] = useState(false);

  const [portalData, setPortalData] = useState<any>(null);

  const closePortal = useCallback(() => {
    setIsOpened(false);
  }, []);

  const openPortal = useCallback(() => {
    setIsOpened(true);
  }, []);

  return { closePortal, openPortal, setPortalData, portalData, isOpen };
};
