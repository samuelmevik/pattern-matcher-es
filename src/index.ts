import { is, isArray, isFunction, isObject, isString } from './guards.js'
import { Cases, Condition, ConditionFunction, ConditionObject } from './typings'

const { keys } = Object

/**
 *
 * @param param
 */
function patternMatch (param: any) {
  return function (...cases: Cases[]) {
    return cases.find(({ condition }) => checkCondition(condition, param))?.callback()
  }
}

/**
 *
 * @param condition
 * @param param
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
 *
 * @param condition
 * @param callback
 */
function when (condition: Condition, callback: Function) {
  return ({
    condition,
    callback
  })
}

/**
 *
 * @param callback
 */
function otherWise (callback: Function) {
  return when(() => true, callback)
}

/**
 *
 * @param {...any} conditions
 */
function allOf (...conditions : Condition[]) : ConditionFunction {
  return function (args : any) {
    return isArray(args) && conditions.every(condition => args.every(arg => checkCondition(condition, arg)))
  }
}

/**
 *
 * @param {...any} conditions
 */
function anyOf (...conditions : Condition[]) : ConditionFunction {
  return function (args : any) {
    return isArray(args) && conditions.some(condition => args.some(arg => checkCondition(condition, arg)))
  }
}

/**
 *
 * @param param
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
