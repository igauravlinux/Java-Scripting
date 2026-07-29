Event Loop ko samajhne ke liye 4 cheezein samajhni hongi
1. Call Stack

Call Stack woh jagah hai jahan JavaScript code execute hota hai.

Example:

function first() {
    console.log("First");
}

function second() {
    console.log("Second");
}

first();
second();

Execution:

Call Stack

↓

first()

↓

console.log()

↓

Stack Empty

↓

second()

↓

console.log()

↓

Stack Empty

JavaScript hamesha Call Stack se code execute karti hai.