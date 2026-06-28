// With Loop

const vowelCount = (name) =>{
    let count = 0;

    for(let i = 0; i < name.length; ++i){
        if(name[i] === 'a' || name[i] === 'e' || name[i] === 'i' || name[i] === 'o' || name[i] === 'u' ){
            count++;
        }else if(name[i] === 'A' || name[i] === 'E' || name[i] === 'I' || name[i] === 'O' || name[i] === 'U'){
            count++;
        }
    }

    return count;
}

let val = vowelCount("Gaurav");
console.log(val);


// Short Approach

