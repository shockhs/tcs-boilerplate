/**
 * Проверка на то, что переданный аргумент является датой
 * Возвращает true/false
 *
 * @param argument - Аргумент для проверки
 */
const isDate = (argument: unknown): argument is Date =>
  argument instanceof Date && argument.valueOf && !Number.isNaN(argument.valueOf());

export default isDate;
