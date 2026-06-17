

//  13. Find and print the sum of all factors of the given number.

let n = 4;
let sum = 0;

for(let i = 1; i <= n; i++){
    if(n % i === 0){
        sum+=i;
    }
}
console.log(sum)