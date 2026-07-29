JavaScript me Promise ek built-in class (constructor) hai. Isliye hum uska object banane ke liye new keyword ka use karte hain.

const promise = new Promise((resolve, reject) => {
    // asynchronous code
});

Yahan:

Promise → built-in class hai.
new Promise(...) → us class ka ek naya object (instance) banata hai.
resolve aur reject → JavaScript khud provide karta hai.

<!-- ----------------------------------------------------- -->

JavaScript internally kuch is tarah sochti hai:

1. new Promise() se ek Promise object banaya.
2. Us object ki initial state pending hoti hai.
3. Executor function turant execute hota hai.
4. Agar resolve() call hua to state fulfilled ho jati hai.
5. Agar reject() call hua to state rejected ho jati hai.