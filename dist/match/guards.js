/**
 * Checks the type of the operand's value is equals to param's.
 *
 * @param type Should be a to string literal.
 */
function typeOf(type) {
    return function (param) {
        // eslint-disable-next-line valid-typeof
        return typeof param === type;
    };
}
/**
 * Checks if the param is an instance of the class type passed.
 *
 * @param type The constructor of a class.
 */
function instanceOf(type) {
    return function (param) {
        return param instanceof type;
    };
}
/**
 * Turns a value into its boolean equivalant.
 *
 * @param param The unknown value.
 */
function isTruthy(param) {
    return Boolean(param);
}
/**
 * Turns a value into its boolean equivalant and return true if it is false.
 *
 * @param param The unknown value.
 */
function isFalsy(param) {
    return !isTruthy(param);
}
/**
 * Checks if the input is a number.
 *
 * @param param The unknown value.
 */
function isNumber(param) {
    return typeOf('number')(param) && !isNaN(param);
}
/**
 * Checks if the input is a string.
 *
 * @param param The unknown value.
 */
function isString(param) {
    return typeOf('string')(param);
}
/**
 * Checks if the input is a boolean.
 *
 * @param param The unkown value.
 */
function isBoolean(param) {
    return typeOf('boolean')(param);
}
/**
 * Checks if the input is undefined.
 *
 * @param param The unknown value.
 */
function isUndefined(param) {
    return typeOf('undefined')(param);
}
/**
 * Checks if the input is defined.
 *
 * @param param The unknown value.
 */
function isDefined(param) {
    return isFalsy(isUndefined(param));
}
/**
 * Checks if the input is null.
 *
 * @param param The unkownn value.
 */
function isNull(param) {
    return param === null;
}
/**
 * Checks if a value is inbetween parameter x and y. Order of x and y deosnt matter.
 *
 * @param x The first value in the range.
 * @param y The second value in the range.
 */
function inRange(x, y) {
    return function (params) {
        return isNumber(params) && (params >= Math.min(x, y) && params <= Math.max(x, y));
    };
}
/**
 * Checks if the input is a finite number.
 *
 * @param param The unknown value.
 */
function isFiniteNumber(param) {
    return isNumber(param) && !isNaN(param) && isFinite(param);
}
/**
 * Checks if the input is an instance of the RegExp class.
 *
 * @param param The unknown value.
 */
function isRegexp(param) {
    return instanceOf(RegExp)(param);
}
/**
 * Checks if the input is an instance of the Date class.
 *
 * @param param The unknown value.
 */
function isDate(param) {
    return instanceOf(Date)(param);
}
/**
 * Checks if the input is an object.
 *
 * @param param The unknown value.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isObject(param) {
    return isFalsy(isNull(param)) && typeOf('object')(param) && isFalsy(instanceOf(Array)(param));
}
/**
 * Checks if the input is a function.
 *
 * @param param The unknown value.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
function isFunction(param) {
    return typeOf('function')(param);
}
/**
 * Checks if the first parameter is equivalant to the second.
 *
 * @param param The first parameter.
 */
function is(param) {
    return function (params) {
        return param === params;
    };
}
const { isArray } = Array;
export { typeOf, isBoolean, isDefined, isFalsy, isNumber, isString, isTruthy, isUndefined, inRange, isRegexp, isFiniteNumber, instanceOf, isNull, isObject, isFunction, isArray, isDate, is };
//# sourceMappingURL=guards.js.map