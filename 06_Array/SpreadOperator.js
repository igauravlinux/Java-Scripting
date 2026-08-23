
// 9. Spread Operator (...)
// It "spreads" the elements of an array.
// Use cases:

// . Expanding array values
// . Copying arrays
// . Merging arrays

// let a = [1,2];
// let b = [3,4];


// let c = [...a,...b];
// console.log(c);


// const arr1 = [1,2,3];

// const arr2 = [...arr1];

// console.log(arr2);


// With Object

const user = {
    name : "Gaurav",
    age: 23
}

const copy = {...user};

console.log(copy);
