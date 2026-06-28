let n1 = 3;
let n2 = 6;
let sum = 0;


while(n1 <= n2){
    if(n1 % 2 !== 0){
        sum += n1;
    }
    n1++;
}

console.log("Sum of Odd = ",sum);
