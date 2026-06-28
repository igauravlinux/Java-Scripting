


const student = {
    name: "Rahul",
    age: 21,
    marks: 90
}

for(key in student){
    console.log(key, student[key]);
    
    // console.log(`${student[key]}`);
}


console.log(Object.values(student));
