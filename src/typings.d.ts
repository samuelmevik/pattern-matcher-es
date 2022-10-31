/* eslint-disable @typescript-eslint/ban-types */
export type Constructor<C> = new (...args: any[]) => C

export type ConditionFunction = (...arg: any) => boolean

export type ConditionObject = { [key: string]: ConditionFunction | ConditionObject }

export type PrimitiveValue = string | number | boolean | null | undefined

export type Condition = ConditionFunction | ConditionObject | PrimitiveValue

export type anyFunction = (...arg: any) => any

export type CallBack<T> = (arg: T) => any

export type Cases<T> = ({ condition: Condition, callback: CallBack<T> | PrimitiveValue })
