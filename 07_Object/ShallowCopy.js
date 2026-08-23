
// Outer object/array ki copy banegi, lekin andar ke nested objects/arrays ka reference same rahega.


let obj1 = {
    name : "Gaurav kumar",
    age : 21
}

let obj2 = {...obj1};
obj2.age = 23;

console.log(obj2);
