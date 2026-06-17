
let n = 1223;

let count = 0;

for(; n != 0; ){
    n = Math.floor(n / 10);
    count++;
}

console.log(count);
