// 18. Print all numbers between a and b that are divisible by 7. 

let a = 10;
let b = 50;

for(let i = a; i <= b; i++){
    if(i % 7 === 0){
        console.log(i);
    }
}