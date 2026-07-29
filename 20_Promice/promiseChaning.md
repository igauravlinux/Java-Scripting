Time = 0s

step1()

Promise (Pending)

↓

Timer Started

-------------------

Time = 1s

Step 1 Completed

↓

resolve()

↓

Promise Fulfilled

↓

step2()

↓

Promise Pending

↓

Timer Started

-------------------

Time = 2s

Step 2 Completed

↓

resolve()

↓

step3()

↓

Promise Pending

↓

Timer Started

-------------------

Time = 3s

Step 3 Completed

↓

resolve()

↓

All steps completed