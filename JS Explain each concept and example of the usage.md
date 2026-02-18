<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# JS Explain each concept and example of the usage

Here’s each JS concept in your list with a plain explanation and a minimal usage example.

***

## Ternary operator

Shorthand for simple `if/else` that returns a value.

```js
const age = 20;
const canDrink = age >= 18 ? 'yes' : 'no';
```

Use it when you want to pick one of two values in a single expression, e.g. in assignments, JSX, or template literals.

***

## Ternary for complex conditionals

Same operator, but the condition (or the results) combine several checks.

```js
const score = 82;
const grade =
  score >= 90 ? 'A' :
  score >= 80 ? 'B' :
  score >= 70 ? 'C' :
  'F';
```

Use nested ternaries very sparingly; once readability suffers, switch to `if/else` or a function.

***

## Ternary operator challenge (pattern)

Typical patterns you’ll practice:

1. Default text if value is missing:
```js
const username = user.name ? user.name : 'Guest';
```

2. In templates:
```js
const label = isOnline ? 'Online' : 'Offline';
console.log(`Status: ${label}`);
```

3. With short-circuiting for simple flags:
```js
const color = darkMode ? 'black' : 'white';
```


***

## Switch statements

A `switch` compares one value against many specific cases, often cleaner than long `if/else if`.

```js
const role = 'admin';

switch (role) {
  case 'admin':
    console.log('Has full access');
    break;
  case 'editor':
    console.log('Can edit content');
    break;
  default:
    console.log('Read only');
}
```

Use it when you are matching the same variable against several discrete values (status codes, menu choices, etc.).

***

## Object destructuring

Syntax to pull properties from an object into variables.

```js
const user = { id: 3, name: 'Sam', age: 30 };

const { name, age } = user;
console.log(name); // 'Sam'
console.log(age);  // 30
```

You can also rename and set defaults:

```js
const { name: username, email = 'none@nowhere.com' } = user;
```


***

## Object destructuring challenge (pattern)

Patterns you’ll use a lot:

1. Function parameters:
```js
function greet({ name, age }) {
  console.log(`Hello ${name}, you are ${age}`);
}
greet(user);
```

2. Nested destructuring:
```js
const post = { title: 'Hi', author: { name: 'Sam' } };
const { author: { name: authorName } } = post;
```


***

## setTimeout

Schedules a function to run once after a delay (in milliseconds). It returns a timeout ID you can cancel.

```js
const id = setTimeout(() => {
  console.log('Runs after 1 second');
}, 1000);

// Cancel if needed
// clearTimeout(id);
```

Use this for one-off delays, debouncing, or simulating async operations.

***

## setTimeout with params

`setTimeout` can pass extra arguments to the callback.

```js
function greet(name, delay) {
  setTimeout(
    (who, ms) => console.log(`Hello ${who} after ${ms}ms`),
    delay,
    name,
    delay
  );
}

greet('Sam', 1500);
```

This avoids creating closures just to capture arguments, and is handy when scheduling the same function with different data.

***

## setInterval

Runs a function repeatedly every given number of milliseconds until you stop it.

```js
let count = 0;

const intervalId = setInterval(() => {
  count++;
  console.log('Tick', count);
  if (count === 5) clearInterval(intervalId);
}, 1000);
```

Use this for timers, polling, or simple animations, and always ensure you eventually call `clearInterval` to avoid leaks.

***

If you want, I can turn each of these into tiny exercises (with answers) targeted at browser vs Node, or at event-loop behavior specifically.
<span style="display:none">[^1]</span>

<div align="center">⁂</div>

[^1]: 2026-02-17-22_15_50-The-Event-Loop-_-Coursera-and-14-more-pages-Personal-2-Microsoft-Edge.jpg

