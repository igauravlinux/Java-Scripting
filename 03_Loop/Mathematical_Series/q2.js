// 2. Find and print the sum of the first n even numbers. 

let n = 10;
let sum = 0;

for(let i = 1; i <= n; ++i){
    if(i % 2 === 0){
        sum += i;
    }
}

console.log(sum);
