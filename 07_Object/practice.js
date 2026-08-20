// const student = {
//     name : "Gaurav",
//     age : 23,
//     isAdult : true,
//     course : "Full Stack Development",
//     address : {
//         city : "patna",
//         state : "Bihar",
//         country : "India"
//     }
// }

// for(let val in student){
//     console.log(`${val} ${student[val]} `);
    
// }




// console.log(student.name);
// console.log(student.address.city);
// student.age = 24;
// student.isDeveloper = true;

// console.log(student);
// delete student.isAdult;

// console.log(student);




const marks = {
    math: 85,
    physics: 92,
    chemistry: 78,
    english: 88
};


let highest = 0;
let subject = "";

for(let val in marks){
    if(marks[val] > highest){
        highest = marks[val];
        subject = val;
    }
}
console.log(`${subject} : ${highest}`);






// let sum = 0;

// for(let val in marks){
//     sum += marks[val];
// }

// console.log(sum);
