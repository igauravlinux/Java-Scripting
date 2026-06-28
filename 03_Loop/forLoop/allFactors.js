
// 12. Print all factors of the given number. 

let n = 4;

for(let i = 1; i <= n; i++){
    if(n % i === 0){
        console.log(i);
    }
}