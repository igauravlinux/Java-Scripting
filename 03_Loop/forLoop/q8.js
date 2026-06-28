// 8. Print all prime numbers between 1 and 100. 

for(let n = 2; n <= 100; ++n){
    let isPrime = true;

    for(let i = 2; i < n; i++){
        if(n % i === 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        console.log(n)
    }
}