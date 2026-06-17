// Arithmetic Operators >> (Used for performing mathematical operatons)

// let a = 5;
// let b = 4;

// console.log("Sum of a and b is:",a + b); //output 9
// console.log("Subtraction of a and b is:",a - b); //output 1
// console.log("Multiplication of a and b is:",a * b); //output 20
// console.log("Divison of a and b is:",a / b); //output 1.25
// console.log("Modulus of a and b is:",a % b); //output 1
// console.log("Exponentiation of a and b is:",a ** b); //output 1 (5 * 5 * 5 * 5 = 625)

// // Increment
// a++;
// console.log(a); // 5 + 1 = 6


// // Decrement
// b--;
// console.log(b); // 4 - 1 = 3



// Comparison Operators >> (Used to compare values and return Boolean (true or false)).

// let a = "5";  let b = 5;

// console.log(a == b); //true because only check value not type
// console.log(a === b); // false because its check type as well
// console.log(a != b); // false becuse its only check value
// console.log(a !== b); // true because its check type as well

// // Greater than , Less than , Greter than or equal to , Less than or equal to

// let x = 10; let y = 2; 
// console.log(x > y); // true , its check whether number is greater than the other number or not
// console.log(x < y); // false , its check whether number is greater than the other number or not
// console.log(x >= y); // true , its check whether number is greater than or equal to
// console.log(x <= y); // false , its check whether number is less than or equal to

// // Note :-- Use === and !== to avoid unexpected type coersion.




// Logical Operators >> (Used to combine or invert Boolean expression)

// || (OR Operator)

// || ka rule:

// Pehla truthy value milte hi usko return kar do.

// Agar pehla value falsy hai, to dusra check hota hai.

// console.log(0 || "Hello"); //Hello


// && (AND Operator)

// && ka rule:

// Pehla falsy value milte hi usko return kar do.
// Agar sab truthy hain, to last value return karo.

// console.log("Hi" && 123); //123






// Step by step:

// null → falsy
// To next value check hui
// false → bhi falsy

// OR operator ko koi truthy value nahi mili,
// to last value return hui:


// console.log(null || false); //false



// let age = 20;

// if(age >= 18 && age <= 50){
//     console.log("Eligible to vote");
// }


// Assignment Operators >> (Used to assign values to variables and update them).

//  = Equal to
let x = 12;

// += plus Equal to
x += 3;

// -= Minus Equal to
x -= 1;

// *= Multiplication Equal to
x *= 2;

//  /= Divison Equal to
x /= 3;

// %= Modulus Equal to
x %= 7;

// Exponiantion Equal to
x **= 4;

