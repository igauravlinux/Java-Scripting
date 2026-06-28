
// Note :- map() is a higher-order array method that applies a callback function to each element and returns a new array containing the transformed values.


// let arr = [10,20,30,40,50];

// Calls a defined callback function on each element of an array, and returns an array that contains the results.
// 👉 Original array change nahi hota

// let result = arr.map((e) => e * 2);
// console.log(result);



// Array ke andr ke elements ko upperacase me convert krna

// let names = ["gaurav","rohan","pawan","ram"];

// let upperName = names.map((name) =>{
//     return name.toUpperCase();
// });

// console.log(upperName);


// Object ke sath

// const students = [
//     {name: "Gaurav", age: 23 },
//     {name: "Khusi", age:21},
//     {name: "Soni", age:20}
// ];

// let studentsName = students.map((student) =>{
//     return student.name;
// });

// console.log(studentsName);



// Question 1

// const arr = [1, 2, 3, 4];

// const result = arr.map((num) => {
//     if (num % 2 === 0) {
//         return num * 10;
//     }
//     return num;
// });

// console.log(result);



// Question 2
// const arr = ["gaurav", "rahul"];

// const result = arr.map((name) => name.length);

// console.log(result);


// Question 3

// const arr = [1,2,3];

// const result = arr.map((num) =>{
//     console.log(num);
// });

// console.log(result);



// Question 4
const arr = [1, 2, 3];

const result = arr.map((num) => {
    if (num > 1) {
        return num * 2;
    }
});

console.log(result);