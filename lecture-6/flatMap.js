


// const students = [
//     {name: "Gaurav", skill: [["Java","SpringBoot"], ["HTML ,JavaScript"]]},
//     {name: "Ram", skill: [["Python","Django"], ["HTML ,Tailwind"]]},
//     {name: "Pawan", skill: [["C++","Mavel"], ["HTML ,Css"]]}
// ];

// // console.log(students.map(student => student.skill));

// let stSkill = students.flatMap(student => student.skill).flatMap(it => it);

// console.log(stSkill);




const orders = [
  {
    id: 1,
    items: ["Laptop", "TV"],
  },
  {
    id: 2,
    items: ["iPhone", "Books"],
  },
];

let items = orders.flatMap(it => it.items)
console.log(items)