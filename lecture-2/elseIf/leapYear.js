// let year = 2032;

// if(year % 400 === 0 && year % 100 != 0 ){
//     console.log("Leap Year");
// }else if(year % 4 === 0){
//     console.log("Leap year");
// }else{
//     console.log("Not a Leap year")
// }


// let alpha = '3';

// if(alpha >= 'a' && alpha <= 'z'){
//     console.log("Its an alphabet")
// }else if(alpha >= 'A' && alpha <= 'Z'){
//     console.log("Its an Alphabet")
// }else if(alpha >= '0' && alpha <= '9'){
//     console.log("Its not an Alphabet")
// }else{
//     console.log("Its not an Alphabet")
// }



// let alpha = 'A';

// if(alpha === 'a' || alpha === 'e' || alpha === 'i' || alpha === 'o' || alpha === 'u'){
//     console.log("Its an Vowel");
// }else if(alpha === 'A' || alpha === 'E' || alpha === 'I' || alpha === 'O' || alpha === 'U'){
//     console.log("Its an Vowel");
// }else{
//     console.log("Its a Consonant");
// }


// const alpha = '@';


// if(alpha >= 'a' && alpha <= 'z' || alpha >= 'A' && alpha <= 'Z'){
//     console.log("Its an alphabet")
// }else if(alpha >= '0' && alpha <= '9'){
//     console.log("Its a digit");
// }else{
//     console.log("Its a Special Character")
// }


// const alpha = 'a';
// const Ascii = alpha.charCodeAt(0);

// if(Ascii >= 65 && Ascii <= 90){
//     console.log("Uppercase");
// }else if(Ascii >= 97 && Ascii <= 122){
//     console.log("Lowecase");
// }else{
//     console.log("special Character")
// }


// {  Equilateral Triangle
// Teenon sides equal hoti hain.
// Teenon angles 60° hote hain.

// Isosceles Triangle
// Do sides equal hoti hain.
// Do angles bhi equal hote hain.


// Scalene Triangle
// Koi bhi side equal nahi hoti.
// Koi bhi angle equal nahi hota. }


// let angA = 40;
// let angB = 70;
// let angC = 90;

// if(angA === angB && angB === angC){
//     console.log("Equilateral Trinagle");
// }else if(angA === angB || angB === angC || angA === angC){
//     console.log("Isosceles Triangle");
// }else{
//     console.log("Scalene Triangle")
// }


// let m1,m2,m3,m4,m5;

// m1 = 50;
// m2 = 34;
// m3 = 78;
// m4 = 90;
// m5 = 89;

// total = m1 + m2 + m3 + m4 + m5;
// percentage = (total / 500) * 100;


// if(percentage >= 90){
//     console.log("Grade A");
// }else if(percentage >= 80){
//     console.log("Grade B");
// }else if(percentage >= 70){
//     console.log("Grade C");
// }else if(percentage >= 60){
//     console.log("Grade D");
// }else if(percentage >= 40){
//     console.log("Grade E");
// }else{
//     console.log("Fail");
// }




// let basicSalary = 12000;

// let HRA;
// let DA;
// let grossSalary;

// if(basicSalary <= 10000){
//     HRA = (basicSalary * 20) / 100;
//     DA = (basicSalary * 80) / 100;
//     grossSalary = HRA + DA + basicSalary;
// }else if(basicSalary >= 10001 && basicSalary <= 20000){
//     HRA = (basicSalary * 25) / 100;
//     DA = (basicSalary * 90) / 100;
//     grossSalary = HRA + DA + basicSalary;
// }else{
//     HRA = (basicSalary * 25) / 100;
//     DA = (basicSalary * 90) / 100;
//     grossSalary = HRA + DA + basicSalary;
// }

// console.log(grossSalary)


// let unit = 300;
// let bill;
// let surCharge;
// let finalBill;

// if(unit <= 50){
//     bill = unit * 0.50;
//     surCharge = bill * 20 / 100;
//     finalBill = bill + surCharge;
// }else if(unit <= 150){
//     bill = 25 + (unit - 50) * 0.75;
//     surCharge = bill * 20 / 100;
//     finalBill = bill + surCharge;
// }else if(unit <= 250){
//     bill = 100 + (unit - 150) * 1.20;
//     surCharge = bill * 20 / 100;
//     finalBill = bill + surCharge;
// }else if(unit >= 250){
//     bill = 220 + (unit - 250) * 1.50;
//     surCharge = bill * 20 / 100;
//     finalBill = bill + surCharge;
// }

// console.log(finalBill);



// Switch Case

// let alpha = 'F';

// switch(alpha){
//     case 'a':
//     case 'A':
//         console.log("Vowel");
//         break;

//     case 'e':
//     case 'E': 
//         console.log("Vowel");
//         break;

//     case 'i':
//     case 'I':
//         console.log("Vowel");
//         break;

//     case 'o':
//     case 'O':
//         console.log("Vowel");
//         break;

//     case 'u':
//     case 'U':
//         console.log("Vowel");
//         break;

//     default:
//         console.log("Consonants");    
// }



// let machine = "m";

// switch(machine){
//     case 'K':
//     case 'k':
//         console.log("Kurkure");
//         break;

//     case 'L':
//     case 'l':
//         console.log("Lays");
//         break;

//     case 'N':
//     case 'n':
//         console.log("Nachos");
//         break;

//     case 'D':
//     case 'd':
//         console.log("Diary Milk");
//         break;

//     case 'M':
//     case 'm':
//         console.log("Munch");
//         break;

//     default:
//         console.log("We don't have that product....")
// }



// let week = 7;

// switch(week){
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     case 4:
//         console.log("Thrusday");
//         break;

//     case 5:
//         console.log("Friday");
//         break;

//     case 6:
//         console.log("Saturday");
//         break;

//     case 7:
//         console.log("Sunday");
//         break

//     default:
//         console.log("Invalid");
// }



// let a = 10;
// let b = 2;

// let result = 3;


// switch(result){
//     case 1:
//         result = a + b;
//         console.log(result);
//         break;

//     case 2:
//         result = a - b;
//         console.log(result);
//         break;

//     case 3:
//         result = a * b;
//         console.log(result);
//         break;

//     case 4:
//         result = a / b;
//         console.log(result);
//         break;

//     case 5:
//         result = a % b;
//         console.log(result);
//         break;

//     default:
//         console.log("Invalid Operation")
// }




// Ternary Operator

// let a = 12;
// let b = 23;

// let result = (a > b) ? "A is Max" : "B is Max";

// console.log(result);



// let year = 2024;

// let result = ((year % 400 === 0) ||( year % 4 === 0 && year % 100 !== 0)) ? "Leap Year" : "Not a Leap year";

// console.log(result);




// let num = 3;

// let result = (num % 2 === 0) ? "Even Number" : "Odd Number";
// console.log(result);




// let a = 12;
// let b = 324;
// let c = 21;

// let result = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);

// console.log(result)


