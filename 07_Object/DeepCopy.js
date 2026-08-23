
let obj1 = {
    person : {
        name: "Gaurav",
        age : 23
    }
};

let obj2 = JSON.parse(JSON.stringify(obj1));


console.log(obj2);

