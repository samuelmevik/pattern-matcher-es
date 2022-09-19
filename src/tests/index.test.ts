import assert from 'assert'
import { typeOf } from '../match/guards.js'

try {
  assert(typeOf('number')('la'), 'lalal')
} catch (error) {
  console.log({ error })
}
