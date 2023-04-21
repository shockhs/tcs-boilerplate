/**
 * Функция проверяет, что тип аргумента === функция
 * Возвращает true/false
 *
 * @example
 * // returns true
 * isFunction(() => {});
 *
 * @example
 * // returns false
 * isFunction('');
 *
 * @param argument - Аргумент для проверки
 */
// eslint-disable-next-line @typescript-eslint/ban-types
const isFunction = (argument: unknown): argument is Function => typeof argument === 'function';

export default isFunction;
