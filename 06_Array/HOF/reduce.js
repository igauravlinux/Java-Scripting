// reduce() ka main kaam hai poore array ko reduce karke ek single value banana.



// let numbers = [2,2,2];

// let result = numbers.reduce((acc, current) =>{
//     return acc + current;
// }, 0);

// console.log(result);



// let numbers = [2,2,2];

// let result = numbers.reduce((acc, current) =>{
//     return acc * current;
// }, 1);

// console.log(result);


const student = [
    {name: "Gaurav" , age: 23},
    {name: "Soni" , age: 13},
    {name: "Prakash" , age: 25},
    {name: "Anand" , age: 27},
];

// let totalAge = student.reduce((acc,st) =>{
//     return acc + st.age;
// },0);



let adultAge = student
    .filter(st => st.age >= 18)
    .map(st => st.age)
    .reduce((acc, age) => acc + age, 0);

console.log(adultAge);



