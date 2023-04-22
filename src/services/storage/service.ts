import { guards } from "@/types/guards";

import { IStorageService } from "./types";

class StorageService implements IStorageService {
  storage: Storage = localStorage;
  isLocalStorageUsed = false;

  constructor(storage?: Storage) {
    this.storage = storage || localStorage;

    if (this.storage === localStorage) {
      this.isLocalStorageUsed = true;
    }
  }

  setItem = (key: string, value: string): void => {
    if (this.isLocalStorageUsed && guards.isObject(value)) {
      value = JSON.stringify(value);
      this.storage.setItem(`${key}IsObject`, `${true}`);
    }

    this.storage.setItem(key, value);
  };

  setItems = (data: Record<string, any>): void => {
    Object.keys(data).forEach((key) => {
      this.setItem(key, data[key]);
    });
  };

  getItem = (key: string): any => {
    if (!key.includes("IsObject")) {
      const isObject = this.getItem(`${key}IsObject`);

      if (isObject) {
        try {
          return JSON.parse(this.storage.getItem(key) || "");
        } catch (e) {
          this.removeItem(key);

          return null;
        }
      }
    }

    return this.storage.getItem(key);
  };

  getItems = (keys: string[]): Record<string, any> =>
    keys.reduce(
      (prev, cur) => Object.assign(prev, { [cur]: this.getItem(cur) }),
      {}
    );

  getItemsByPrefix = (prefix: string): Record<string, any> => {
    if (!prefix) {
      console.warn("StorageService.getItemsByPrefix: префикс не передан");

      return {};
    } else {
      return Object.keys(this.storage)
        .filter((key) => key.startsWith(prefix))
        .reduce(
          (result, key) => Object.assign(result, { [key]: this.getItem(key) }),
          {}
        );
    }
  };

  removeItemsByPrefix = (prefix: string): void => {
    if (!prefix) {
      console.warn("StorageService.removeItemsByPrefix: префикс не передан");
    } else {
      Object.keys(this.storage).forEach((key) => {
        if (key.startsWith(prefix)) {
          this.storage.removeItem(key);
        }
      });
    }
  };

  removeItem = (key: string): void => {
    this.storage.removeItem(key);

    if (this.storage.getItem(`${key}IsObject`)) {
      this.storage.removeItem(`${key}IsObject`);
    }
  };

  removeItems = (keys: string[]): void => {
    keys.forEach((key) => {
      this.removeItem(key);
    });
  };

  clear = (): void => {
    this.storage.clear();
  };
}

const TemplateStorageServiceInstance = new StorageService();

export default TemplateStorageServiceInstance;

export { StorageService };
