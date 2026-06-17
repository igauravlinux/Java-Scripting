

// Array → elements ko swap kar sakte ho.
// String → characters ko direct modify nahi kar sakte, pehle array banana padta hai.

let str = "Coding Age".split("");

let left = 0;
let right = str.length - 1;

while(left < right){
    let temp = str[left];
    str[left] = str[right];
    str[right] = temp;

    left++;
    right--;
}

for(let val of str){
    console.log(val);
}