
let a = 0;
let b = 1;
let next = 0;

let n = 5;

for(let i = 1; i <= n; i++){
    console.log(a + " ");
    next = a + b;
    a = b;
    b = next;
}
