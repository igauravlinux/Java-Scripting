// 11. Find and print the sum of the Fibonacci series.

let n = 6;

let a = 0;
let b = 1;
let next = 0;

let sum = 0;

for(let i = 1; i <= n; ++i){

    sum += a;

    console.log(a+ " ");
    next = a + b;
    a = b;
    b = next;    

   
}

console.log(sum);
