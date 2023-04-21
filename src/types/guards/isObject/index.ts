import { UnknownObject } from '@/types/utils';
import isNull from '../isNull';

/**
 * Функция проверяет, что тип аргумента является объектом
 * Возвращает true/false
 *
 * @example
 * // returns true
 * isObject({});
 *
 * @example
 * // returns false
 * isObject('');
 *
 * @example
 * // returns false
 * isObject(null)
 *
 * @param argument - Аргумент для проверки
 */
const isObject = (argument: unknown): argument is UnknownObject => typeof argument === 'object' && !isNull(argument);

export const isGenericObject = <T extends UnknownObject>(argument: unknown): argument is T =>
  typeof argument === 'object' && !isNull(argument);

export default isObject;
