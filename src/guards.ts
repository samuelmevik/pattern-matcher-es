import { Constructor } from './typings'

/**
 *
 * @param type
 */
function typeOf<Type> (type : string) {
  return function (param : Type) : param is Type {
    return typeof param === type
  }
}

/**
 *
 * @param type
 */
function instanceOf<Type> (type : Constructor<Type>) {
  return function (param : any) : param is Type {
    return param instanceof type
  }
}

/**
 *
 * @param param
 */
function isTruthy (param : any) {
  return Boolean(param)
}

/**
 *
 * @param param
 */
function isFalsy (param : any) {
  return !isTruthy(param)
}

/**
 *
 * @param param
 */
function isNumber (param : any) : param is number {
  return typeOf<number>('number')(param) && !isNaN(param)
}

/**
 *
 * @param param
 */
function isString (param : any) : param is string {
  return typeOf('string')(param)
}

/**
 *
 * @param param
 */
function isBoolean (param : any) : param is boolean {
  return typeOf('boolean')(param)
}

/**
 *
 * @param param
 */
function isUndefined (param : any) : param is undefined {
  return typeOf('undefined')(param)
}

/**
 *
 * @param param
 */
function isDefined (param : any) : param is any {
  return isFalsy(isUndefined(param))
}

/**
 *
 * @param param
 */
function isNull (param : any) : param is null {
  return param === null
}

/**
 *
 * @param x
 * @param y
 */
function inRange (x : number, y : number) {
  return function (params: any) {
    return isNumber(params) && (params >= Math.min(x, y) && params <= Math.max(x, y))
  }
}

/**
 *
 * @param param
 */
function isFiniteNumber (param : any) : param is number {
  return isNumber(param) && !isNaN(param) && isFinite(param)
}

/**
 *
 * @param param
 */
function isDate<Type extends RegExp> (param : any) : param is Type {
  return instanceOf(RegExp)(param)
}

/**
 *
 * @param param
 */
function isObject<Type extends Object> (param : any) : param is Type {
  return isFalsy(isNull(param)) && typeOf('object')(param) && isFalsy(instanceOf(Array)(param))
}

/**
 *
 * @param param
 */
function isFunction<Type extends Function> (param : any) : param is Type {
  return typeOf('function')(param)
}

/**
 *
 * @param param
 */
function is (param : any) {
  return function (params: number | string) {
    return param === params
  }
}

const { isArray } = Array

export {
  typeOf,
  isBoolean,
  isDefined,
  isFalsy,
  isNumber,
  isString,
  isTruthy,
  isUndefined,
  inRange,
  isDate,
  isFiniteNumber,
  instanceOf,
  isNull,
  isObject,
  isFunction,
  isArray,
  is
}
