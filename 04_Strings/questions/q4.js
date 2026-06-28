
const {log} = require("console");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("enter a string: ",(str)=>{

    let result = str;

    let vowel = 0;
    let cons = 0;

    for(let i = 0; i < result.length; ++i){
        if(result[i] === 'a' || result[i] === 'e' || result[i] === 'i' || result[i] === 'o' || result[i] === 'u'){
                vowel++;
        }else{
            cons++;
        }
    }

    console.log(vowel);
    console.log(cons);
    

})