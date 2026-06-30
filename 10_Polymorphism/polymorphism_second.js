

// Parent Reference

class Shape{
    draw(){
        console.log("Drawing Shape");
    }
}

class Circle extends Shape{
    draw(){
        console.log("Drawing Circle");
    }
}

class Rectangle extends Shape{
    draw(){
    console.log("Draiwng Rectangle");
    }
}

let shapes = [
    new Shape(),
    new Circle(),
    new Rectangle()
];

for(let shape of shapes){
    shape.draw();
}

