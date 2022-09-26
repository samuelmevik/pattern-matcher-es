import { patternMatch, isObject, when, is, allOf, isString, isNumber, includes, anyOf, isUndefined } from '../index'

describe('patternMatch Object', () => {
  it('Should return true if value is a object', () => {
    expect(
      patternMatch({})(when(isObject, () => true))
    ).toBeTruthy()

    expect(
      patternMatch({})(when({}, () => true))
    ).toBeTruthy()
  })
})


describe('patternMatch nestled Object', () => {
  const exampleOb = {
    ob : {
      ob2 : 'string'
    }
  }
  it('Should return true if it matches', () => {
    expect(
      patternMatch(exampleOb)(when({}, () => false))
    ).toBeFalsy()

    expect(
      patternMatch(exampleOb)(when({
        ob : {
          ob2 : is('string'),
        }
      }, () => true))
    ).toBeTruthy()
  })
})

describe('patternMatch nestled Object with arrays', () => {
  const exampleOb = {
    ob : {
      ob2 : ['test', 'lala', 'pn']
    }
  }
  it('Should return true if it matches', () => {
    expect(
      patternMatch(exampleOb)(when({}, () => false))
    ).toBeFalsy()

    expect(
      patternMatch(exampleOb)(when({
        ob : {
          ob2 : allOf(isString),
        }
      }, () => true))
    ).toBeTruthy()
  })
})

describe('Check if array is is only made of one type', () => {
  const exampleArray = ['arr', 'lalala', 'pa']
  it('Should return true if only made of one type', () => {
    expect(
      patternMatch(exampleArray)(when(allOf(isString), () => true))
    ).toBeTruthy()

    expect(
      patternMatch(exampleArray)(when(allOf(isNumber), () => true))
    ).toBeFalsy()
  })
})

describe('Check if array includes one of the type type', () => {
  const exampleArray = ['arr', 7, undefined]
  it('Should return true if type is included in the array', () => {
    expect(
      patternMatch(exampleArray)(when(anyOf(isString, isNumber, isUndefined), () => true))
    ).toBeTruthy()

    expect(
      patternMatch(exampleArray)(when(anyOf(isObject), () => true))
    ).toBeFalsy()
  })
})

describe('Check if array includes one the value', () => {
  const exampleArray = ['arr', 7, undefined]
  it('Should return true if the value is included in the array', () => {
    expect(
      patternMatch(exampleArray)(when(includes(7), () => true))
    ).toBeTruthy()

    expect(
      patternMatch(exampleArray)(when(includes('five'), () => true))
    ).toBeFalsy()
  })
})


