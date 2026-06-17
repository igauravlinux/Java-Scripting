// 5. Print the first n terms of a geometric progression for the given first term and 
// common ratio.

let a = 2;
let r = 3;

let n = 5;

for(let i = 1; i <= n; ++i){
    console.log(a);
    a *= r;
}