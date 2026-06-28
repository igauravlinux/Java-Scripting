





let arr = [10,20,12,32,43];

let count = 0;
let sum = 0;


for(let i = 0; i < arr.length; ++i){
    sum += arr[i];
    count++;
}

let avg = sum / count;
console.log(avg);



