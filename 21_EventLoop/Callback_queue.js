// 3. Callback Queue

// Jab Web API ka kaam complete ho jata hai, to uska callback Callback Queue me aa jata hai.

// Example:

setTimeout(() => {
    console.log("Hello");
}, 3000);

// 3 second baad callback seedha Call Stack me nahi aata.

// Pehle woh Callback Queue me wait karta hai.

// Callback Queue

// ↓

console.log("Hello")