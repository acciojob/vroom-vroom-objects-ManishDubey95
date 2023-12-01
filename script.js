// Complete the js code
function Car(make, model) {
    this.make = make;
    this.model = model;
}
Car.prototype.getMakeMode = function(){
    return `${this.make} ${this.model}`;
}

function SportsCar(make, model, topSpeed) {
    this.topSpeed = top;
    SportsCar.call(this, make, model);
}

SportsCar.prototype.__proto__ = Car.prototype;

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
