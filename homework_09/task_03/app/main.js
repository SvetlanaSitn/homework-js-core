class Circle{
    constructor(radius){
        this.radius = radius;
    }
  
    get circleRadius(){
        return this.radius;
    }

    set circleRadius(radius){
        this.radius = radius;
    }

    get circleDiameter(){
        return this.radius * 2;
    }
    
    circleArea(){
        return Math.PI * this.radius ** 2;
    }

    circumference(){
        return Math.PI * this.radius * 2;
    }
}
let value = new Circle(5);
console.log(value.circleRadius);

value.circleRadius = 10;
console.log(value.circleRadius);

let forDiam = new Circle(15);
console.log(forDiam.circleDiameter); 

let forArea = new Circle(20);
console.log(forArea.circleArea().toFixed(2));

let forCircumference = new Circle(25);
console.log(forCircumference.circumference().toFixed(2));