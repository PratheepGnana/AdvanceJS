<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# event loop, call stack, web api and queue task explain step by step

Let’s walk through this slowly with a mental “animation” of what happens when JavaScript runs.

To keep it concrete, imagine this code:

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```

We’ll use it to explain:

- Call stack
- Web APIs
- Task (callback) queue
- Event loop

***

## 1. Call stack (where JS actually runs)

- JavaScript runs in one main thread and uses a **call stack** to know what function is running right now.
- When a function is called, it is **pushed** on the stack; when it returns, it is **popped** off.

Step by step for our code:

1. Global code starts → “global” execution context is put on the stack.
2. `console.log("A")` is called → it goes on the stack, runs, logs `A`, then is popped off.
3. `setTimeout(...)` is called → this function goes on the stack, JS calls into the browser timer system (Web API), then `setTimeout` returns and is popped off.
4. `console.log("C")` is called → it goes on the stack, logs `C`, then is popped off.
5. Now only “global” is left; when the file is done, the call stack becomes empty.

Question for you: up to this point, what has been printed in the console?

***

## 2. Web APIs (browser doing async work)

- The browser (or Node runtime) provides **Web APIs** like `setTimeout`, `fetch`, DOM events, etc.
- These do the asynchronous work **outside** the JS call stack (e.g., timing, HTTP requests, user clicks).

For our `setTimeout`:

1. When `setTimeout(() => console.log("B"), 0)` ran on the stack, the callback function and delay (0 ms) were handed to the timer system.
2. The JS engine then **immediately continues**; it doesn’t wait.
3. After at least 0 ms, the browser marks that callback as “ready to run” and puts it into the **task queue** (not the stack).

So while `console.log("C")` is executing, the timer is handled separately by the Web API system.

***

## 3. Task queue (callbacks waiting to run)

- The **task queue** (often called callback queue or macrotask queue) is just a line of callbacks that are ready to run, **but not yet on the stack**.
- When an async operation finishes (timer, `fetch` callback, event handler, etc.), its callback is put at the **end** of this queue.

In our code:

- After the delay, the callback `() => console.log("B")` is added to the task queue.
- It just waits there until the call stack is empty.

Key rule: callbacks in the task queue are only moved to the stack when the call stack is empty.

***

## 4. Event loop (the traffic controller)

- The **event loop** is a simple “forever loop” conceptually doing:

1. Is the call stack empty?
2. If yes, is there something in the microtask queue? (Promises, etc.)
3. If microtasks are empty, is there something in the task queue?
4. If yes, take the first one from the queue and push it onto the stack → execute it.

Applied to our example:

1. After `console.log("C")`, the call stack becomes empty.
2. Event loop checks microtask queue (none in this example).
3. Event loop checks task queue → sees our `() => console.log("B")` callback.
4. It moves that callback from the task queue to the call stack.
5. The callback runs, calling `console.log("B")`.
6. `console.log("B")` logs `B`, then returns; callback finishes; stack is empty again.

Final console order: `A`, `C`, then `B`.

***

To check your understanding:
If you add a `Promise.resolve().then(() => console.log("P"))` between `setTimeout` and `console.log("C")`, what order do you think the logs appear in, and **why**? (Focus on how microtask queue vs task queue changes the ordering.)
<span style="display:none">[^1_1][^1_10][^1_11][^1_12][^1_13][^1_14][^1_15][^1_2][^1_3][^1_4][^1_5][^1_6][^1_7][^1_8][^1_9]</span>

<div align="center">⁂</div>

[^1_1]: https://www.geeksforgeeks.org/javascript/what-is-an-event-loop-in-javascript/

[^1_2]: https://www.youtube.com/watch?v=WNrHrwm1wkU

[^1_3]: https://www.youtube.com/watch?v=lqLSNG_79lI

[^1_4]: https://www.youtube.com/watch?v=okkHnAo8GmE

[^1_5]: https://www.w3schools.com/nodejs/nodejs_event_loop.asp

[^1_6]: https://dev.to/antonov_mike/event-loop-call-stack-web-api-task-queue-microtask-queue-1eb2

[^1_7]: https://dev.to/buildwithgagan/javascript-event-loop-explained-a-beginners-guide-with-examples-4kae

[^1_8]: https://www.youtube.com/watch?v=8-DzE3BmtBM

[^1_9]: https://www.javascripttutorial.net/javascript-event-loop/

[^1_10]: https://www.lydiahallie.com/blog/event-loop

[^1_11]: https://www.builder.io/blog/visual-guide-to-nodejs-event-loop

[^1_12]: https://www.programfarmer.com/en-US/articles/2021/javascript-browser-event-loop

[^1_13]: https://www.youtube.com/watch?v=8aGhZQkoFbQ

[^1_14]: https://namastedev.com/blog/event-loop-and-callback-queue-in-js-10/

[^1_15]: https://www.youtube.com/watch?v=eiC58R16hb8

