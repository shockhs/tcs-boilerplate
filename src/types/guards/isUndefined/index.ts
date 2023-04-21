/**
 * Функция проверяет, что тип аргумента === undefined
 * Возвращает true/false
 *
 * @example
 * // returns true
 * isNumber();
 *
 * @example
 * // returns false
 * isNumber('');
 *
 * @param argument - Аргумент для проверки
 */
const isUndefined = (argument: unknown): argument is undefined => typeof argument === 'undefined';

export default isUndefined;
