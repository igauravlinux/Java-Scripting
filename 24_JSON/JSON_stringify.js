

// Convert JS Object to JSON String

let obj = {
    name: "Gaurav",
    age: 23,
    city: "Patna"
};

// type check 
console.log(typeof obj); //object

let jsonString = JSON.stringify(obj);
console.log(jsonString);

// type check
console.log(typeof jsonString); //String


