


const reverseNum = (n) =>{

let reverse = 0;

while(n > 0){
    let rem = n % 10;
    reverse = reverse * 10 + rem;
    n = Math.floor(n / 10);
}

return reverse;

}

console.log(reverseNum(1234));
