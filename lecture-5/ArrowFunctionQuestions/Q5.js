


const reverseNum = (n) =>{

let reverse = 0;

while(n > 0){
    let rem = n % 10;
    reverse = reverse * 10 + rem;
    n = Math.floor(n / 10);
}

return reverse;

}

const countDigit = (x) =>{
    let count = 0;

    while(x > 0){
        count++;
        x = Math.floor(x / 10);
    }
    return count;
}

console.log(reverseNum(1234));
console.log(countDigit(2121));
