// 6. Print the Fibonacci series up to the required number of terms.


let n = 20;

let a = 0;
let b = 1;
let next = 0;


for(let i = 1; i <= n; ++i){
    console.log(a);
    next = a + b;
    a = b
    b = next;
}
