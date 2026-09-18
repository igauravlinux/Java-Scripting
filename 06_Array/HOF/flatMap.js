
// The flatMap() method in JavaScript is a built-in array method that first maps each element using a mapping function, then flattens the result into a new array by exactly one level.

// const students = [
//     {name: "Gaurav", skill: [["Java","SpringBoot"], ["HTML ,JavaScript"]]},
//     {name: "Ram", skill: [["Python","Django"], ["HTML ,Tailwind"]]},
//     {name: "Pawan", skill: [["C++","Mavel"], ["HTML ,Css"]]}
// ];

// // console.log(students.map(student => student.skill));

// let stSkill = students.flatMap(student => student.skill).flatMap(it => it);

// console.log(stSkill);




// const orders = [
//   {
//     id: 1,
//     items: ["Laptop", "TV"],
//   },
//   {
//     id: 2,
//     items: ["iPhone", "Books"],
//   },
// ];

// let items = orders.flatMap(it => it.items)
// console.log(items)


const orders = [
  {
    id : 1,
    items : ["TV","Cooller"]
  },
  {
    id : 2,
    items : ["Plate","Microwave"]
  },
  {
    id : 3,
    items : ["Machine","Freeze"]
  }
]

let res = orders.flatMap(e => e.items)
console.log(res);
