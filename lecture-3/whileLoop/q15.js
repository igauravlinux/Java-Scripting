let n1 = 2;
let n2 = 7;
let sum = 0;

while(n1 <= n2){
    if(n1 % 2 === 0){
        sum += n1;
    }
    n1++;
}

console.log("Sum of even nums = ",sum);
