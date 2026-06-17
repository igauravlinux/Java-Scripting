let n = 10;
let i = 2;

let isPrime = true;

while(i < n){
    if(n % i === 0){
        isPrime = false;
        break;
    }
    i++;
}

if(n <= 1){
    console(n + " is Not a Prime Number");
}else if(isPrime){
    console.log(n + " is a Prime Number");
}else{
    console.log(n + " is Not a Prime Number");
}