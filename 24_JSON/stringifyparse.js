
// stringify + parse Example

let student = {
    name: "Gaurav",
    age: 23,
    city: "patna"
};

// Converting to JSON String
let jsonString = JSON.stringify(student);
console.log(jsonString);


// Converting to Object
let obj = JSON.parse(jsonString);
console.log(obj);

