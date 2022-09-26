import { anyFunction, Cases, Condition, ConditionFunction } from '../typings';
/**
 * Checks if param matches with a pre defined pattern.
 *
 * @param param Accepts nested objects, arrays, numbers and strings.
 */
declare function patternMatch(param: any): (...cases: Cases[]) => any;
/**
 * Checks condition.
 *
 * @param condition Needs to be a function or a object whose end value is a function. The function needs to return a boolean.
 * @param callback The callback function runs if the condition is true.
 */
declare function when(condition: Condition, callback: anyFunction): {
    condition: Condition;
    callback: anyFunction;
};
/**
 * If no condition is met this is a fallback.
 *
 * @param callback Callback runs if there is no true case.
 */
declare function otherWise(callback: anyFunction): {
    condition: Condition;
    callback: anyFunction;
};
/**
 * Checks if all the values in the array matches the condition.
 *
 * @param {...any} conditions Needs to be a function or a object whose end value is a function. The function needs to return a boolean.
 */
declare function allOf(...conditions: Condition[]): ConditionFunction;
/**
 * Checks if any of the values in the array matches the condition.
 *
 * @param {...any} conditions Needs to be a function or a object whose end value is a function. The function needs to return a boolean.
 */
declare function anyOf(...conditions: Condition[]): ConditionFunction;
/**
 * Checks if the array includes a param.
 *
 * @param param Can be anything.
 */
declare function includes(param: any): ConditionFunction;
export { patternMatch, when, otherWise, allOf, anyOf, includes };
