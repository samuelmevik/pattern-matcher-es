import { Constructor } from "./typings"

function typeOf<Type>(type : string) {
    return function (param : Type) : param is Type {
        return typeof param === type
    }
}

function instanceOf<Type>(type :  Constructor<Type>) {
    return function (param : any) : param is Type {
        return param instanceof type
    }
}

function isTruthy(param : any) {
    return Boolean(param)
}

function isFalsy(param : any) {
    return !isTruthy(param)
}
