/* eslint-disable @typescript-eslint/ban-types */
export type Constructor<C> = new (...args: any[]) => C

export type ConditionFunction = (...arg: any) => boolean
export type ConditionObject = { [key: string]: ConditionFunction | ConditionObject }

export type Condition = ConditionFunction | ConditionObject

export type anyFunction = (...arg: any) => any

export type Cases = ({ condition: Condition, callback: anyFunction })
