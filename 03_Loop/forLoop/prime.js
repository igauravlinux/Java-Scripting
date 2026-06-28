

let n = 7;
let isPrime = true;


for(let i = 2; i <= n / 2; i++){
    if(n % i === 0){
        isPrime = false;
        break;
    }
}

if(n <= 1){
    console.log("Not a Prime Number");
}else if(isPrime){
    console.log("Prime Number");
}else{
    console.log("Not a Prime Number");
}