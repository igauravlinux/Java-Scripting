// It collects all arguments into one array copposite of spread.

function sumAll(...nums){
    return nums.reduce((acc,val) => acc + val , 0);
}

console.log(sumAll(10,20,30));
