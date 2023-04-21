import { Nullable } from '@/types/utils';

/**
 * Функция проверяет, что тип аргумента === массив
 * Возвращает true/false
 *
 * @example
 * // returns true
 * isArray([]);
 *
 * @example
 * // returns false
 * isArray('');
 *
 * @param argument
 * @returns {Boolean}
 */
export const isArray = <T>(argument?: Nullable<T[] | T>): argument is T[] => Array.isArray(argument);
