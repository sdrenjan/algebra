function Car(id, color, fuel, numberOfDoors) {
    this.id = id;
    this.color = color;
    this.fuel = fuel;
    this.numberOfDoors = numberOfDoors;
}

const car1 = new Car(1, 'white', 'benzin', 4);
const car2 = new Car(2, 'blue', 'benzin', 2);
const car3 = new Car(3, 'black', 'dizel', 4);

console.log('Color of first car is: ' + car1.color);

Car.prototype.honk = function () {
    console.log(`Honk Honk, car${this.id}`);
}

car2.honk();

Car.prototype.name = '';
console.log(Object.getPrototypeOf(car2));

car2.name = 'Volvo';