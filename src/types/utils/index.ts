/** Тип для того, чтобы сделать все поля у объекта не обязательными (работает рекурсивно по вложенными объектам) */
export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

/** Переданный тип или null */
export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type UnknownObject = Record<keyof any, unknown>;

export type AnyFunction = (...args: any[]) => any;
