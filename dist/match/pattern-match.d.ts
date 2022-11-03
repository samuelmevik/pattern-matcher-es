import { CallBack, Cases, Condition, ConditionFunction, PrimitiveValue } from '../typings';
/**
 * Checks if param matches with a pre defined pattern.
 *
 * @param param Accepts nested objects, arrays, numbers and strings.
 */
declare function patternMatch<T>(param: T): (...cases: Cases<T>[]) => any;
/**
 * Checks condition.
 *
 * @param condition Needs to be a function or a object whose end value is a function. The function needs to return a boolean.
 * @param callback The callback function runs if the condition is true.
 */
declare function when<T>(condition: Condition, callback: CallBack<T> | PrimitiveValue): {
    condition: Condition;
    callback: PrimitiveValue | CallBack<T>;
};
/**
 * If no condition is met this is a fallback.
 *
 * @param callback Callback runs if there is no true case.
 */
declare function otherWise<T>(callback: CallBack<T> | PrimitiveValue): {
    condition: Condition;
    callback: PrimitiveValue | CallBack<T>;
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
