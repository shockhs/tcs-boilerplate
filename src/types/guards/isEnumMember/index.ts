const isEnumMember = <T>(key: unknown, inputEnum: T): key is T[keyof T] =>
  Object.values(inputEnum as any).includes(key as T[keyof T]);

export default isEnumMember;
