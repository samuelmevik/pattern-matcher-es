import { typeOf, instanceOf, isNumber, inRange, isTruthy, isString, isBoolean, isDate, isObject, isFunction } from '../index'

describe('typeOf', () => {
  it('Should return true if the type matches', () => {
    expect(typeOf('string')('')).toBeTruthy()
    expect(typeOf('number')(1)).toBeTruthy()
    expect(typeOf('anything')('')).toBeFalsy()
    expect(typeOf('anything')({})).toBeFalsy()
    expect(typeOf('object')({})).toBeTruthy()
  })
})

describe('instanceOf', () => {
  it('Should return true if the type matches', () => {
    expect(instanceOf(String)('')).toBeFalsy()
    expect(instanceOf(String)({})).toBeFalsy()
    expect(instanceOf(Object)({})).toBeTruthy()
    expect(instanceOf(Date)(new Date())).toBeTruthy()
    expect(instanceOf(Date)({})).toBeFalsy()
  })
})

describe('isTruthy', () => {
  it('Should return true if the value is truthy', () => {
    expect(isTruthy(false)).toBeFalsy()
    expect(isTruthy({})).toBeTruthy()
    expect(isTruthy('true')).toBeTruthy()
    expect(isTruthy(undefined)).toBeFalsy()
    expect(isTruthy(null)).toBeFalsy()
  })
})

describe('isString', () => {
  it('Should return true if the value is a string', () => {
    expect(isString('string')).toBeTruthy()
    expect(isString(4)).toBeFalsy()
    expect(isString({})).toBeFalsy()
  })
})

describe('isBoolean', () => {
  it('Should return true if the value is a Boolean', () => {
    expect(isBoolean(Boolean(true))).toBeTruthy()
    expect(isBoolean(true)).toBeTruthy()
    expect(isBoolean({})).toBeFalsy()
  })
})

describe('isNumber', () => {
  it('Should return true if the value is a number', () => {
    expect(isNumber('2')).toBeFalsy()
    expect(isNumber({})).toBeFalsy()
    expect(isNumber(2)).toBeTruthy()
    expect(isNumber(2.43)).toBeTruthy()
    expect(isNumber(Math.PI)).toBeTruthy()
  })
})

describe('inRange', () => {
  it('Should return true value is between the two limiters', () => {
    expect(inRange(0, 1)(0)).toBeTruthy()
    expect(inRange(0, 1)(1)).toBeTruthy()
    expect(inRange(0, 0)(1)).toBeFalsy()
    expect(inRange(0, 0)(-1)).toBeFalsy()
    expect(inRange(1, 0)(1)).toBeTruthy()
    expect(inRange(0, -1)(-1)).toBeTruthy()
  })
})

describe('isDate', () => {
  it('Should return true if the value is a date', () => {
    expect(isDate('2')).toBeFalsy()
    expect(isDate({})).toBeFalsy()
    expect(isDate(new Date())).toBeTruthy()
  })
})

describe('isObject', () => {
  it('Should return true if the value is a object', () => {
    expect(isObject('2')).toBeFalsy()
    expect(isObject({})).toBeTruthy()
    expect(isObject(2)).toBeFalsy()
    expect(isObject(2.43)).toBeFalsy()
    expect(isObject(Math.PI)).toBeFalsy()
  })
})

describe('isFunction', () => {
  it('Should return true if the value is a function', () => {
    expect(isFunction('2')).toBeFalsy()
    expect(isFunction(() => {})).toBeTruthy()
    expect(isFunction(2)).toBeFalsy()
    expect(isFunction(2.43)).toBeFalsy()
    expect(isFunction(Math.PI)).toBeFalsy()
  })
})
