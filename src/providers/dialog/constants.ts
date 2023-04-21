import { HttpStatusCode } from "@/types/api";

export const ERROR_DICTIONARY: { [key: number]: string } = {
  [HttpStatusCode.errorBadRequest]: "Ошибка запроса",
  [HttpStatusCode.errorAccess]: "Ошибка доступа",
  [HttpStatusCode.errorNotFound]: "Ошибка данных",
  [HttpStatusCode.errorInternal]: "Ошибка сервера",
};
