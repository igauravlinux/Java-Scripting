Program Start
      │
      ▼
Promise Create
      │
      ▼
Executor Runs Immediately
      │
      ▼
setTimeout() Starts Timer
      │
      ▼
Promise = Pending
      │
      ▼
.then() Registered
.catch() Registered
      │
      ▼
2 Seconds Pass
      │
      ▼
Timer Callback Executes
      │
      ▼
resolve("Data fetched")
      │
      ▼
Promise = Fulfilled
      │
      ▼
.then() goes to Microtask Queue
      │
      ▼
Call Stack Empty
      │
      ▼
Event Loop
      │
      ▼
.then() Executes
      │
      ▼
Console → Data fetched