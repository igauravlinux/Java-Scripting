let n1 = 10;
let n2 = 15;

let i = 1;
let gcd = 1;

while(i <= n1 && i <= n2){
    if(n1 % i === 0 && n2 % i === 0){
        gcd = i;
    }
    i++;
}

console.log(gcd);
