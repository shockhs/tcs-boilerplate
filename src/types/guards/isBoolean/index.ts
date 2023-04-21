/**
 * Функция проверяет, что тип аргумента === Boolean
 * Возвращает true/false
 *
 * @example
 * // returns true
 * isString(true);
 * isString(false);
 *
 * @example
 * // returns false
 * isFunction(123);
 * isFunction('123');
 *
 * @param argument - Аргумент для проверки
 */
const isBoolean = (argument: unknown): argument is boolean => typeof argument === 'boolean';

export default isBoolean;
