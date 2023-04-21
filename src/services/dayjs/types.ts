export interface IDayJsService {
  setLocale: (preset: string, object?: Partial<ILocale>) => void;
}

export type { Dayjs } from 'dayjs';
