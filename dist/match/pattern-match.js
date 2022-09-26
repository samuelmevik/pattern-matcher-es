import { isArray, isFunction, isObject } from './guards.js';
const { keys } = Object;
/**
 * Checks if param matches with a pre defined pattern.
 *
 * @param param Accepts nested objects, arrays, numbers and strings.
 */
function patternMatch(param) {
    return function (...cases) {
        return cases.find(({ condition }) => checkCondition(condition, param))?.callback();
    };
}
/**
 * Validates a condition.
 *
 * @param condition Needs to be a function or a object whose end value is a function. The function needs to return a boolean.
 * @param param Accepts nested objects, arrays, numbers and strings.
 */
function checkCondition(condition, param) {
    if (isObject(condition)) {
        return keys(condition).every(key => checkCondition(condition[key], param[key]));
    }
    else if (isFunction(condition)) {
        return condition(param);
    }
    return false;
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
    return when(() => true, callback);
}
/**
 * Checks if all the values in the array matches the condition.
 *
 * @param {...any} conditions Needs to be a function or a object whose end value is a function. The function needs to return a boolean.
 */
function allOf(...conditions) {
    return function (args) {
        return isArray(args) && conditions.every(condition => args.every(arg => checkCondition(condition, arg)));
    };
}
/**
 * Checks if any of the values in the array matches the condition.
 *
 * @param {...any} conditions Needs to be a function or a object whose end value is a function. The function needs to return a boolean.
 */
function anyOf(...conditions) {
    return function (args) {
        return isArray(args) && conditions.some(condition => args.some(arg => checkCondition(condition, arg)));
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