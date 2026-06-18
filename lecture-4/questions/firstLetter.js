
// Captilize first letter only 

let str = "gaurav";

let result = "";

for(let i = 0; i < str.length; ++i){
    if(i === 0){
        result += str[i].toUpperCase();
    }else{
        result += str[i];
    }
}

console.log(result);




