import { isArray, isFunction, isObject } from './guards.js'
import { anyFunction, Cases, Condition, ConditionFunction, ConditionObject } from '../typings'

const { keys } = Object

/**
 * Checks if param matches with a pre defined pattern.
 *
 * @param param Accepts nested objects, arrays, numbers and strings.
 */
function patternMatch (param: any) {
  return function (...cases: Cases[]) {
    return cases.find(({ condition }) => checkCondition(condition, param))?.callback()
  }
}

/**
 * Validates a condition.
 *
 * @param condition Needs to be a function or a object whose end value is a function. The function needs to return a boolean.
 * @param param Accepts nested objects, arrays, numbers and strings.
 */
function checkCondition (condition: Condition, param: any) : boolean {
  if (isObject<ConditionObject>(condition)) {
    return keys(condition).every(key => checkCondition(condition[key], param[key]))
  } else if (isFunction<ConditionFunction>(condition)) {
    return condition(param)
  }
  return false
}

/**
 * Checks condition.
 *
 * @param condition Needs to be a function or a object whose end value is a function. The function needs to return a boolean.
 * @param callback The callback function runs if the condition is true.
 */
function when (condition: Condition, callback: anyFunction) {
  return ({
    condition,
    callback
  })
}

/**
 * If no condition is met this is a fallback.
 *
 * @param callback Callback runs if there is no true case.
 */
function otherWise (callback: anyFunction) {
  return when(() => true, callback)
}

/**
 * Checks if all the values in the array matches the condition.
 *
 * @param {...any} conditions Needs to be a function or a object whose end value is a function. The function needs to return a boolean.
 */
function allOf (...conditions : Condition[]) : ConditionFunction {
  return function (args : any) {
    return isArray(args) && conditions.every(condition => args.every(arg => checkCondition(condition, arg)))
  }
}

/**
 * Checks if any of the values in the array matches the condition.
 *
 * @param {...any} conditions Needs to be a function or a object whose end value is a function. The function needs to return a boolean.
 */
function anyOf (...conditions : Condition[]) : ConditionFunction {
  return function (args : any) {
    return isArray(args) && conditions.some(condition => args.some(arg => checkCondition(condition, arg)))
  }
}

/**
 * Checks if the array includes a param.
 *
 * @param param Can be anything.
 */
function includes (param : any) : ConditionFunction {
  return function (args: any) {
    return isArray(args) && args.includes(param)
  }
}

export {
  patternMatch,
  when,
  otherWise,
  allOf,
  anyOf,
  includes
}
