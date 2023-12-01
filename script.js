// Complete the js code
function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
    // Call the Car constructor to initialize make and model
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Set up the prototype chain
SportsCar.prototype = Object.create(Car.prototype);

// Set the constructor property for correct instanceof checks
SportsCar.prototype.constructor = SportsCar;

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
