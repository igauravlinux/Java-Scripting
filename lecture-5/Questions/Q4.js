

function countVowel(name){
    let count = 0;
    for(let i = 0; i < name.length; ++i){
        if(name[i] === 'a' || name[i] === 'e' || name[i] === 'i' || name[i] === 'o' || name[i] === 'u'){
            count++;
        }
    }
    return count;
}

let val = countVowel("xyz");
console.log(val);
