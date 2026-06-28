

// Object Method

let student = {
    name: "Gaurav",
    greet: function (){
        console.log(`Hello, I am ${this.name}`);
    }
};

student.greet();
