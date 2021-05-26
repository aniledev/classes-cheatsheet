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
const newVehiclePrice = corrola.takePriceDiscount(300);
console.log(newVehiclePrice);

// with inheritance, you can create a parent class with properties and methods that multiple child classes share
// create a parent class with the shared properties name & behavior, and shared methods incrementBehavior()
// create a child class Dog that shares all the same properties and methods of the parent Animal class
// create a child class Cat that includes name, behavior, usesLitter properties and the incrementBehavior() method

class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }

  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior++;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
}

class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }

  get usesLitter() {
    return this._useLitter;
  }
}

const catFelix = new Cat("Felix", true);
console.log(catFelix);
catFelix.incrementBehavior();
const catFelixBehavior = catFelix.behavior;
console.log(catFelixBehavior);
console.log(catFelix);

// using static methods: static methods cannot be accessed from instances of the parent class or instances of the subclasses
class Pet extends Animal {
  constructor(name) {
    super(name);
  }

  static generateName() {
    const names = ["Angel", "Spike", "Buffy", "Willow", "Tara"];
    const randomIndex = Math.floor(Math.random() * 5);
    return names[randomIndex];
  }
}

const petName = Pet.generateName();
console.log(petName);
const felix = new Pet("Felix");
const felixName = felix.generateName(); // TypeError felix.generateName is not a function
// this is because generateName() is a static method that is only accessed by the parent class
