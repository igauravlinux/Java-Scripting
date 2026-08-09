
// Note :- map() is a higher-order array method that applies a callback function to each element and returns a new array containing the transformed values.

// The JavaScript .map() method creates a new array by applying a function to every element in an existing array.

// Calls a defined callback function on each element of an array, and returns an array that contains the results.
// 👉 Original array change nahi hota


// let arr = [2,3,4,5,6];

// let val = arr.map((e) => e + 2);
// console.log(va);






// Array ke andr ke elements ko upperacase me convert krna

// let fruits = ["apple","mango","kiwi","orange"];

// let result = fruits.map((fruit) =>{
//     return fruit.toUpperCase();
// })

// console.log(result);


// Array ke andr ke elements ko ke first letter ko upperacase me convert krna

// let fruits = ["apple","mango","kiwi","orange"];

// let result = fruits.map((fruit) =>{
//     return fruit.charAt(0).toUpperCase() + fruit.slice(1);
// });

// console.log(result);



// Object ke sath

const students = [
    {name: "Gaurav", age: 23 },
    {name: "Khusi", age:21},
    {name: "Soni", age:20}
];

// let names = students.map((e) =>{
//     return e.name;
// })
// console.log(names);

// let usersAge = students.map(e => e.age);
// console.log(usersAge);




// Question 1

// const arr = [1, 2, 3, 4];

// let result = arr.map((e) =>{
//     if(e % 2 == 0){
//         return e * 2;
//     }else{
//         return e;
//     }
// })

// console.log(result);



// Question 2

// const arr = ["gaurav", "rahul","soni","pallavi"];

// let val = arr.map((e) => e.length);
// console.log(val);





// Question 3

// const arr = [1,2,3];

// const result = arr.map((num) =>{
//     return num;
// })
// console.log(result);



// Question 4
// const arr = [1, 2, 3];

// const result = arr.map((num) => {
//     if (num > 1) {
//         return num * 2;
//     }else{
//         return num;
//     }
// });

// console.log(result);