import { patternMatch, isObject, isDefined, when, is, isUndefined } from '../index'

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


describe('patternMatch filled Object', () => {
  const ob = {
    username: 'username',
    password: 'password'
  }
  it('Should return true if value is a object', () => {
    expect(
      patternMatch(ob)(when({}, () => false))
    ).toBeFalsy()

    expect(
      patternMatch(ob)(when({
        username: isDefined,
        password: isDefined,
        prop: isUndefined
      }, () => true))
    ).toBeTruthy()
  })
})
