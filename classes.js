// every class has a constructor method that gets invoked every time we create a new instance of the class
class Surgeon {
  constructor(name, department) {
    this.name = name; // property of the class
    this.department = department;
  }
}

class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }
}

// the new keyword calls the constructor(), runs the code inside of it, and then returns the new instance
const surgeonSteadmire = new Surgeon("Tyanna Steadmire", "Pediatrics");
console.log(surgeonSteadmire);
/* 
  Surgeon {name: "Tyanna Steadmire", department: "Pediatrics"}
  */

const civic = new Car("Honda", "Civic", "black");
console.log(civic);
/* 
  Car {make: "Honda", model: "Civic", color: "black"}
  */

// example of a class with properties that should not be accessed directly and getter methods
class Vehicle {
  constructor(make, model, color) {
    this._make = make;
    this._model = model;
    this._color = color;
    this._price = 10000;
  }

  get make() {
    return this._make;
  }

  get model() {
    return this._model;
  }

  get color() {
    return this._color;
  }

  get price() {
    return this._price;
  }

  takePriceDiscount(discountAmount) {
    return (this._price -= discountAmount);
  }
}

const corrola = new Vehicle("Toyota", "Corrola", "red");
console.log(corrola);
const 
