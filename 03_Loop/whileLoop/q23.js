let a = 8;
let b = 4;


let start = Math.min(a,b);
let end = Math.max(a,b);

let count = 0;

let i = start + 1;

while(i < end){
    count++;
    i++;
}

console.log("Count =",count);
