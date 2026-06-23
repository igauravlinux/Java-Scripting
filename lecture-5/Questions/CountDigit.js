



const digitCount = (a) =>{
    let count = 0;

    if(a === 0){
        count += 1;
    }

    while(a > 0){
        a = Math.floor(a / 10);
        count++;
    }

    return count;
}

let val = digitCount(0);
console.log(val);
