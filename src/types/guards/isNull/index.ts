/**
 * Функция проверяет, что тип аргумента === null
 * Возвращает true/false
 *
 * @example
 * // returns true
 * isNumber(null);
 *
 * @example
 * // returns false
 * isNumber('');
 *
 * @param argument - Аргумент для проверки
 */
const isNull = (argument: unknown): argument is null => argument === null;

export default isNull;
