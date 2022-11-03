import { isArray, isFunction, isObject } from './guards.js';
const { keys } = Object;
/**
 * Checks if param matches with a pre defined pattern.
 *
 * @param param Accepts nested objects, arrays, numbers and strings.
 */
function patternMatch(param) {
    return function (...cases) {
        const callback = cases.find(({ condition }) => isValidCondition(condition, param))?.callback;
        return isFunction(callback) ? callback(param) : callback;
    };
}
/**
 * Verifies that the condition is met.
 *
 * @param condition Should be a condition that can be evaluated.
 * @param param Can be anything.
 */
function isValidCondition(condition, param) {
    if (isObject(condition)) {
        return isValidObjectCondition(condition, param);
    }
    if (isFunction(condition)) {
        return isValidFunctionCondition(condition, param);
    }
    return isValidPrimitiveCondition(condition, param);
}
/**
 * Loops through the keys of the object and checks if the value matches the condition.
 *
 * @param ob Object containing conditions.
 * @param param Can be anything.
 */
function isValidObjectCondition(ob, param) {
    return keys(ob).every(key => isValidCondition(ob[key], param[key]));
}
/**
 * Runs a function and returns the result.
 *
 * @param fn A function that returns a boolean.
 * @param param Can be anything.
 */
function isValidFunctionCondition(fn, param) {
    return fn(param);
}
/**
 * Checks if the primitive is the same as the param.
 *
 * @param primitive Needs to be a string, number, null, undefined or boolean.
 * @param param Can be anything.
 * @returns If it is, return true. Otherwise return false.
 */
function isValidPrimitiveCondition(primitive, param) {
    return primitive === param;
}
/**
 * Checks condition.
 *
 * @param condition Needs to be a function or a object whose end value is a function. The function needs to return a boolean.
 * @param callback The callback function runs if the condition is true.
 */
function when(condition, callback) {
    return ({
        condition,
        callback
    });
}
/**
 * If no condition is met this is a fallback.
 *
 * @param callback Callback runs if there is no true case.
 */
function otherWise(callback) {
    return when(true, callback);
}
/**
 * Checks if all the values in the array matches the condition.
 *
 * @param {...any} conditions Needs to be a function or a object whose end value is a function. The function needs to return a boolean.
 */
function allOf(...conditions) {
    return function (args) {
        return isArray(args) && conditions.every(condition => args.every(arg => isValidCondition(condition, arg)));
    };
}
/**
 * Checks if any of the values in the array matches the condition.
 *
 * @param {...any} conditions Needs to be a function or a object whose end value is a function. The function needs to return a boolean.
 */
function anyOf(...conditions) {
    return function (args) {
        return isArray(args) && conditions.some(condition => args.some(arg => isValidCondition(condition, arg)));
    };
}
/**
 * Checks if the array includes a param.
 *
 * @param param Can be anything.
 */
function includes(param) {
    return function (args) {
        return isArray(args) && args.includes(param);
    };
}
export { patternMatch, when, otherWise, allOf, anyOf, includes };
//# sourceMappingURL=pattern-match.js.map