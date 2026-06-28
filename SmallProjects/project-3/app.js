
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
        console.log("6. Show Topper");
        console.log("7. Average Marks");
        console.log("8. Search Student By Name");
        console.log("9. Exit");
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
                showTopper();
                break;

            case 7:
                averageMarks();
                break;

            case 8:
                searchStudent();
                break;

            case 9:
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
        start();
        return;
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


function processFirstStudent(){
    if(students.length === 0){
        console.log("No student found");
        start();
        return;
    }else{
        const firstSt = students.shift();
        console.log("First Student: ",firstSt);
    }
    console.log(students);
    start();
}


function showAllStudents(){

    if(students.length === 0){
        console.log("No Student found");
        start();
        return;
    }else{
        for(let val of students){
        console.log(`Name: ${val.name} Marks: ${val.marks}`);
        }
    }   

    start();
}


function showTopper(){

    let topper = students[0];

    if(students.length === 0){
        console.log("No student found");
        start();
        return;
    }else{
        for(let i = 0; i < students.length; ++i){
            if(students[i].marks > topper.marks){
                topper = students[i];
            }
        }
    }

    console.log(`Topper Name: ${topper.name} Marks: ${topper.marks}`);

    start();
}



function averageMarks(){

    let total_marks = 0;
    let avg = 0
    if(students.length === 0){
        console.log("No student found");
        start();
        return;
    }else{

        for(let i = 0; i < students.length; ++i){
            total_marks += students[i].marks;
        }

        avg = total_marks / students.length;
    }

    console.log(`Average Marks is ${avg.toFixed(2)}`);
    start();
}



function searchStudent(){

    rl.question("Enter name to search: ",(k) =>{

        if(students.length === 0){
            console.log("No student found");
            start();
            return;
        }else{

            for(let i = 0; i < students.length; ++i){

                if(k.toLowerCase() === students[i].name.toLowerCase()){
                    console.log(students[i]);
                    start();
                    return;
                }

            }
            console.log("No student found");
        start();
    }

    });
    
}