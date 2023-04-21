/**
 * Функция проверяет, что тип аргумента === строка
 * Возвращает true/false
 *
 * @example
 * // returns true
 * isString('123');
 *
 * @example
 * // returns false
 * isFunction(123);
 *
 * @param argument - Аргумент для проверки
 */
export const isString = (argument: unknown): argument is string => typeof argument === 'string';

export const isNonEmptyString = (argument: unknown): argument is string => isString(argument) && argument.length > 0;
