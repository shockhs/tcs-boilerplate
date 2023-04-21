import { AdapterType, IAdapterMapper } from "./types";

class AdapterMapper implements IAdapterMapper {
  adapterType = AdapterType.common;

  constructor(adapterType: AdapterType) {
    this.adapterType = adapterType;
  }
}

export { AdapterMapper };
