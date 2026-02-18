<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# JS Explain each concept and example of the usage

Here’s each concept in that list, with a short explanation and a minimal example.

***

## The event loop

The event loop coordinates the **call stack**, callback/microtask queues, and Web APIs (or Node APIs) so that asynchronous code runs after synchronous code finishes.

```js
console.log('A');

setTimeout(() => {
  console.log('C'); // runs later, via task queue
}, 0);

Promise.resolve().then(() => {
  console.log('B'); // microtask, runs before timeout
});

console.log('D');
// Order: A, D, B, C
```

Use this understanding to reason about when callbacks, promises, and timers actually execute relative to normal code.

***

## Import/export: named

Named exports let a module expose multiple bindings by name; importing code must use the same names (or explicitly rename).

```js
// mathUtils.js
export function add(a, b) {
  return a + b;
}
export const PI = 3.14;

// main.js
import { add, PI } from './mathUtils.js';

console.log(add(2, 3)); // 5
console.log(PI);        // 3.14
```

Use named exports when a module has several utilities or values to share.

***

## Import/export: default

A default export is the main value a module exposes; importing code can choose any local name.

```js
// logger.js
export default function log(message) {
  console.log(`[LOG] ${message}`);
}

// main.js
import log from './logger.js';

log('Hello'); // [LOG] Hello
```

Use a default export when a module’s primary purpose is a single function, class, or object.

***

## The Date() constructor

`Date` represents points in time, and can be created empty (now), from a timestamp, or from a date string.

```js
const now = new Date();
const specific = new Date('2026-02-17T22:20:00Z');

console.log(now.toISOString());
console.log(specific.getFullYear()); // 2026
```

Use `Date` for timestamps, scheduling, and formatting human-readable dates.

***

## The Error() constructor

`Error` objects represent runtime problems; they carry a message and stack trace and work with `throw`/`catch`.

```js
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

try {
  divide(1, 0);
} catch (err) {
  console.error(err.message); // Cannot divide by zero
}
```

Create custom errors to signal exceptional situations instead of returning special values.

***

## Pre-increment

`++x` increments a variable and evaluates to the incremented value; `x++` increments but evaluates to the old value.

```js
let x = 1;
let a = ++x; // x = 2, a = 2

let y = 1;
let b = y++; // y = 2, b = 1
```

Use pre-increment when you explicitly need the incremented value in the same expression; otherwise prefer explicit `x += 1` for clarity.

***

## Numeric separators \& BigInt

Numeric separators (`_`) improve readability of large numbers; `BigInt` represents integers larger than `Number`’s safe range.

```js
// Numeric separators
const population = 67_000_000; // 67000000

// BigInt
const big = 9_007_199_254_740_991n;    // Number.MAX_SAFE_INTEGER
const bigger = big + 10n;              // still exact
```

Use separators for clarity in literals, and `BigInt` when you need exact integer math beyond $2^{53} - 1$.

***

## Hoisting

Hoisting is how JS moves declarations (not initializations) to the top of their scope during compilation.

```js
console.log(a); // undefined (var is hoisted)
var a = 5;

foo(); // works; function declaration is hoisted
function foo() {
  console.log('hi');
}

// let/const are hoisted but in temporal dead zone:
console.log(b); // ReferenceError
let b = 3;
```

Understanding hoisting helps avoid bugs with `var`, `function`, `let`, and `const` order and explains temporal dead zone errors.
<span style="display:none">[^1]</span>

<div align="center">⁂</div>

[^1]: 2026-02-17-22_19_40-The-Event-Loop-_-Coursera-and-14-more-pages-Personal-2-Microsoft-Edge.jpg

