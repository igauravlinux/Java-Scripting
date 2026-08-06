
// String ke format me save krte hai
let user = {
    name : "Gaurav kumar",
    age: 22,
    city: "patna"
}

// Convert object to String. JSON.stringify()

localStorage.setItem("user", JSON.stringify(user));



// Wapas Object Banana
let data = localStorage.getItem("user");

let obj = JSON.parse(data);

console.log(obj);
