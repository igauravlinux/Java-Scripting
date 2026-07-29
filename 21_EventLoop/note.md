# JavaScript Event Loop

## Pehle ek baat samjho

JavaScript **Single Threaded** language hai.

Iska matlab:

* Ek time par sirf **ek hi kaam** execute kar sakti hai.
* Iske paas sirf **ek Call Stack** hota hai.

Lekin phir sawal aata hai:

> Agar JavaScript ek hi kaam kar sakti hai, to `setTimeout()`, API Calls, aur `fetch()` background me kaise chalte hain?

Iska jawab hai **Event Loop**.

---

# Event Loop ko samajhne ke liye 4 cheezein samajhni hongi

## 1. Call Stack

Call Stack woh jagah hai jahan JavaScript code execute hota hai.

Example:

```javascript
function first() {
    console.log("First");
}

function second() {
    console.log("Second");
}

first();
second();
```

Execution:

```text
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
```

JavaScript hamesha Call Stack se code execute karti hai.

---

## 2. Web APIs

`setTimeout()`, `setInterval()`, `fetch()`, DOM Events, aur AJAX JavaScript ka hissa nahi hote.

Ye browser ke **Web APIs** hote hain.

Example:

```javascript
setTimeout(() => {
    console.log("Hello");
}, 3000);
```

JavaScript sirf itna karti hai:

* `setTimeout()` ko browser ko de deti hai.
* Browser timer start kar deta hai.
* JavaScript agla code execute karne lagti hai.

---

## 3. Callback Queue

Jab Web API ka kaam complete ho jata hai, to uska callback **Callback Queue** me aa jata hai.

Example:

```javascript
setTimeout(() => {
    console.log("Hello");
}, 3000);
```

3 second baad callback seedha Call Stack me nahi aata.

Pehle woh **Callback Queue** me wait karta hai.

```text
Callback Queue

↓

console.log("Hello")
```

---

## 4. Event Loop

Event Loop ka sirf ek kaam hai:

> **Check karna ki Call Stack khali hai ya nahi.**

* Agar Call Stack busy hai → Wait karo.
* Agar Call Stack empty hai → Callback Queue se callback utha kar Call Stack me bhej do.

Isi process ko **Event Loop** kehte hain.

---

# Complete Example

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Hello");
}, 2000);

console.log("End");
```

### Step 1

```text
Call Stack

↓

console.log("Start")
```

Output:

```text
Start
```

---

### Step 2

```javascript
setTimeout(...)
```

JavaScript:

* Callback ko Web API ko de deti hai.
* Browser 2 second ka timer start kar deta hai.

Call Stack khali ho jata hai.

---

### Step 3

Next line execute hoti hai.

```javascript
console.log("End");
```

Output:

```text
Start
End
```

---

### Step 4

2 second complete.

Browser callback ko **Callback Queue** me bhej deta hai.

```text
Callback Queue

↓

console.log("Hello")
```

---

### Step 5

Event Loop dekhta hai:

* Call Stack empty hai.

To callback ko Call Stack me bhej deta hai.

```text
Call Stack

↓

console.log("Hello")
```

Output:

```text
Start
End
Hello
```

---

# Pura Flow

```text
JavaScript Code
       │
       ▼
   Call Stack
       │
       │ setTimeout()
       ▼
    Web APIs
       │
       │ Timer Complete
       ▼
 Callback Queue
       │
       ▼
   Event Loop
       │
       ▼
   Call Stack
       │
       ▼
   console.log("Hello")
```

---

# Ek Aur Example

```javascript
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

console.log("3");
```

Bahut log sochte hain output hoga:

```text
1
2
3
```

Lekin actual output hai:

```text
1
3
2
```

### Kyun?

`setTimeout(..., 0)` ka matlab **turant execute karo** nahi hota.

Iska matlab hai:

> Callback ko Web API me bhejo aur jab Call Stack khali ho jaye tab execute karo.

Isliye pehle synchronous code chalega, uske baad callback.

---

# Event Loop ka Rule

**Jab tak Call Stack khali nahi hota, Event Loop kisi callback ko execute nahi karta.**

---

# Yaad Rakhne Ki Trick

**Call Stack** → JavaScript ka working table.

**Web APIs** → Browser ka helper.

**Callback Queue** → Waiting room.

**Event Loop** → Security guard jo check karta hai ki working table khali hai ya nahi.

Flow:

```text
Call Stack
      ↓
Web APIs
      ↓
Callback Queue
      ↓
Event Loop
      ↓
Call Stack
```

---

# Summary

* JavaScript Single Threaded hai.
* Code Call Stack me execute hota hai.
* Time lene wale kaam Web APIs handle karte hain.
* Complete hone par callback Callback Queue me aata hai.
* Event Loop wait karta hai ki Call Stack khali ho.
* Stack empty hote hi callback ko Call Stack me bhej diya jata hai.
* Isi wajah se asynchronous code synchronous code ke baad execute hota hai.
