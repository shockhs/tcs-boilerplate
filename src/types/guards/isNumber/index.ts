/**
 * Функция проверяет, что тип аргумента === число
 * Возвращает true/false
 *
 * @example
 * // returns true
 * isNumber(17);
 *
 * @example
 * // returns false
 * isNumber('');
 *
 * @param argument - Аргумент для проверки
 */
const isNumber = (argument: unknown): argument is number => Number.isInteger(argument);

export default isNumber;
