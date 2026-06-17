
// 7. Calculate and print the factorial of every number from 1 to n. 

let n = 5;



for(let i = 1; i <= n; i++){

    let fact = 1;

    for(let j = 1; j <= i; j++){
        fact *= j;
    }

    console.log(`Factorial of ${i} = ${fact}`);
    

}