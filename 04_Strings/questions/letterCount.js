const str = "aaabbbbcccddd"

let count = {};
for(let ch of str){
    count[ch] = (count[ch] || 0) + 1;
}

console.log(count);