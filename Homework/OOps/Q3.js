

// Create a Circle class and find area and circumference.

class Circle{
    constructor(radius){
        this.radius = radius;
    }

    area(){
        let a = Math.PI * this.radius * this.radius;
        console.log(`Area: ${a}`);
        
    }

    circumfrence(){
        let c = 2 * Math.PI * this.radius; 
        console.log(`Circumfrence: ${c}`);
    }
}

let c1 = new Circle(12);
c1.area();
c1.circumfrence();