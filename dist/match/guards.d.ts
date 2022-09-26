import { Constructor } from '../typings';
/**
 * Checks the type of the operand's value is equals to param's.
 *
 * @param type Should be a to string literal.
 */
declare function typeOf<Type>(type: string): (param: Type) => param is Type;
/**
 * Checks if the param is an instance of the class type passed.
 *
 * @param type The constructor of a class.
 */
declare function instanceOf<Type>(type: Constructor<Type>): (param: any) => param is Type;
/**
 * Turns a value into its boolean equivalent.
 *
 * @param param The unknown value.
 */
declare function isTruthy(param: any): boolean;
/**
 * Turns a value into its boolean equivalent and return true if it is false.
 *
 * @param param The unknown value.
 */
declare function isFalsy(param: any): boolean;
/**
 * Checks if the input is a number.
 *
 * @param param The unknown value.
 */
declare function isNumber(param: any): param is number;
/**
 * Checks if the input is a string.
 *
 * @param param The unknown value.
 */
declare function isString(param: any): param is string;
/**
 * Checks if the input is a boolean.
 *
 * @param param The unknown value.
 */
declare function isBoolean(param: any): param is boolean;
/**
 * Checks if the input is undefined.
 *
 * @param param The unknown value.
 */
declare function isUndefined(param: any): param is undefined;
/**
 * Checks if the input is defined.
 *
 * @param param The unknown value.
 */
declare function isDefined(param: any): param is any;
/**
 * Checks if the input is null.
 *
 * @param param The unknown value.
 */
declare function isNull(param: any): param is null;
/**
 * Checks if a value is between parameter x and y. Order of x and y deosnt matter.
 *
 * @param x The first value in the range.
 * @param y The second value in the range.
 */
declare function inRange(x: number, y: number): (params: any) => boolean;
/**
 * Checks if the input is a finite number.
 *
 * @param param The unknown value.
 */
declare function isFiniteNumber(param: any): param is number;
/**
 * Checks if the input is an instance of the RegExp class.
 *
 * @param param The unknown value.
 */
declare function isRegexp<Type extends RegExp>(param: any): param is Type;
/**
 * Checks if the input is an instance of the Date class.
 *
 * @param param The unknown value.
 */
declare function isDate<Type extends Date>(param: any): param is Type;
/**
 * Checks if the input is an object.
 *
 * @param param The unknown value.
 */
declare function isObject<Type extends Object>(param: any): param is Type;
/**
 * Checks if the input is a function.
 *
 * @param param The unknown value.
 */
declare function isFunction<Type extends Function>(param: any): param is Type;
/**
 * Checks if the first parameter is equivalent to the second.
 *
 * @param param The first parameter.
 */
declare function is(param: any): (params: number | string) => boolean;
declare const isArray: (arg: any) => arg is any[];
export { typeOf, isBoolean, isDefined, isFalsy, isNumber, isString, isTruthy, isUndefined, inRange, isRegexp, isFiniteNumber, instanceOf, isNull, isObject, isFunction, isArray, isDate, is };
