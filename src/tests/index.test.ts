import assert from 'assert'
import { typeOf } from '../guards.js'

try {
    assert(typeOf('number')('la'), 'lalal')
} catch (error : AssertionError) {
    console.log({error});
    
}
