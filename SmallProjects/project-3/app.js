
const { log } = require("console");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let students = [];


    function showMenu(){
        console.log("1. Add Student");
        console.log("2. Remove Last Student");
        console.log("3. Admit Emergency Student");
        console.log("4. Process First Student");
        console.log("5. Show All Students");
        console.log("6. Exit");
    }


    function start(){
        showMenu()

        rl.question("Enter any number: ",(choice)=>{

        choice = Number(choice);

        switch(choice){
            case 1:
                addStudent();
                break;
            case 2:
                removeLastStudent();
                break;
            case 3:
                admitEmergencyStudent();
                break;
            case 4:
                processFirstStudent();
                break;
            case 5:
                showAllStudents();
                break;
            case 6:
                rl.close();
                break;

                default:
                console.log("Invalid Input")

        }


});

}

start();






function addStudent(){
    rl.question("Enter your name: ",(n)=>{

    let name = n;

    rl.question("Enter your marks: ",(m)=>{

    let marks = Number(m);

    const stInfo = {
    name : name,
    marks : marks
    };

    students.push(stInfo);
    console.log(students);
    start();
});

});
}



function removeLastStudent(){
    if(students.length === 0){
        console.log("No students to remove");
    }else{
    const removedStd = students.pop();
   console.log("Removed Student:", removedStd); 
    }

    console.log(students);
    start();
};





function admitEmergencyStudent(){
    rl.question("Enter your name: ",(n)=>{

    let name = n;

    rl.question("Enter your marks: ",(m)=>{

    let marks = Number(m);

    const stInfo = {
    name : name,
    marks : marks
    };

    students.unshift(stInfo);
    console.log("Emergency Student admitted successfully");
    console.log(students);
    start();
});

});
};










