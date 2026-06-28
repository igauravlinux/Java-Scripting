


const student = {
    name: "Gaurav",
    age: 23,
    mobNum: 8825364028,
    isAdult: true
};


console.log(typeof student);  //object
console.log(student);

// Accessing Object Properties

// Dot Notation
console.log(student.name); //Gaurav
console.log(student.age); //23
console.log(student.isAdult); 

// Bracket Notation
console.log(student["isAdult"]); //true

let obj = {
    "fullName": "Soni Sharma"
};
console.log(obj["fullName"]); //Soni Sharma


// Modifying / Adding Properties

student.mobNum = 9989898989; //Modifying existing property
student.marks = 99; // Adding new Property
student.height = 5.9 //Adding new Property

console.log(student);






