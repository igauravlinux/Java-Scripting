

// Array → elements ko swap kar sakte ho.
// String → characters ko direct modify nahi kar sakte, pehle array banana padta hai.

const {log} = require("console");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ",(str) =>{

    let result = str.split("");

    let left = 0;
    let right = result.length - 1;

    while(left < right){
        let temp = result[left];
        result[left] = result[right];
        result[right] = temp;

        left++;
        right--;
    }

    for(val of result){
        console.log(val);
    }
    


})
 

































// let str = "Coding Age".split("");

// let left = 0;
// let right = str.length - 1;

// while(left < right){
//     let temp = str[left];
//     str[left] = str[right];
//     str[right] = temp;

//     left++;
//     right--;
// }

// for(let val of str){
//     console.log(val);
// }