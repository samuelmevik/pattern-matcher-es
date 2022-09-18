import { is, isArray, isFunction, isObject, isString } from "./guards.js";
import { Cases, Condition, ConditionFunction, ConditionObject } from "./typings";

const { keys } = Object

function patternMatch(param: any) {
    return function (...cases: Cases[]) {
        return cases.find(({ condition }) => checkCondition(condition, param))?.callback()
    }
}



function when (condition: Condition, callback: Function) {
    return ({
        condition,
        callback
    })
}


