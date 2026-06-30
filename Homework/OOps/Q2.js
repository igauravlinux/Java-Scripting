

// Create an Employee class and calculate yearly salary.

class Employee{

    constructor(name,designation,monthSalary){
        this.name = name;
        this.designation = designation;
        this.monthSalary = monthSalary;
    }

    calculate(){

        console.log("Yearly salary is: ",this.monthSalary * 12);
        
    }

}


let e1 = new Employee("Joshua","Frontend Developer",10000);
e1.calculate();