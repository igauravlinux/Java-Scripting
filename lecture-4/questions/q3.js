const {log} = require("console");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ",(str)=>{

    let result = str;
    let count = 0;

    for(let i = 0; i < str.length; ++i){
        count++;
    }
    console.log(count);
    
});