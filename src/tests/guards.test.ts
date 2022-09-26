import { typeOf, instanceOf, isNumber, inRange } from '../index'

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
