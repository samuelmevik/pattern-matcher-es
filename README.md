# Pattern Matching
A declarative pattern-matching library.

License: MIT

## Table of contents
  - [Introduction](#introduction)
  - [Installation](#installation)
  - [Usage](#usage)

## Introduction
There are limited ways in `Javascript` to match expressions with the exception of strings. The [switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch "An expression whose result is matched against each case clause.") is severely limiting. To avoid accidental fallthrough an explicit `break` is required in each `case` and the only comparison that it can do is `===`. This library aim is to solve these problems by providing a declarative version of the `if` and `switch` conditionals. Where the shape of the shape of the data is described by "patterns".

## Usage
````js
// ESM
import { patternMatch, when, otherwise } from 'pattern-matcher-es'

patternMatch(data)(
    when(pattern, handler),
    otherwise(handler)
)
````
`data` can be anything. The `pattern` is a description of how you expect the data to look like. `patternMatch` executes each line by line, top to bottom. Be mindful of how you write your code, the order of the `when` functions matter. If no `when` function applies truthfully `patternMatch` will default to `otherWise` if provided, otherwise the expression evaluates to undefined.
<details>
<summary>Examples</summary>

````js
    const example = 'This is a string'
    const res = patternMatch(example)(
        when(isString, () => 'First case'),
        when(isNumber, () => 'Second case'),
        otherWise(() => 'Third case')
    )
    console.log(res) // Will print out 'First case'
````

````js
    const example = 5
    const res = patternMatch(example)(
        when(inRange(1, 1000), () => 'First case'),
        when(inRange(1, 10), () => 'Second case'),
        when(inRange(1, 5), () => 'Third case'),
        otherWise(() => 'Fourth case')
    )
    console.log(res) // Will print 'First case' since order matter.
````
An example with an advanced object structure and arrays.
````js
    const example = {
        index: 5,
        ob : {
            sampleArray: ['123', '213','32132']
        }
    }
    const validator = {
        index: is(5),
        ob: {
            sampleArray: allOf(isString)
        } 
    }
    const res = patternMatch(example)(
        when(validator, () => 'First case'),
        otherWise(() => 'Second case')
    )
    console.log(res) // Will print 'First case'
````
</details>

## Before and after example
````js
return patternMatch(res)(
    when({ statusCode: inRange(200, 299) }, () => res.body),
    otherWise(() => {})
)
````
1. `patternMatch` will check that `statusCode` is a key in `res`.
2. The `inRange` guard check if the `value` is a number and if it is within the passed ranged.
<details>
<summary>The imperative way.</summary>

````js
    if (typeof res?.statusCode === number && res.statusCode >= 200 && res.statusCode < 300) {
        return res.body
    } else {
        return {}
    }
````
</details>
