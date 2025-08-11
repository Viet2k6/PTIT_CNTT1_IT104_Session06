"use strict";
class Vehicle {
    constructor() {
        this.speed = 0;
    }
    speedUp(amount) {
        this.speed += amount;
        console.log(`Tốc độ hiện tại khi tăng tốc là ${this.speed} km/h`);
    }
    slowDown(amount) {
        this.speed = Math.max(0, this.speed - amount);
        console.log(`Tốc độ hiện tại khi giảm tốc là ${this.speed} km/h`);
    }
    stop() {
        this.speed = 0;
        console.log(`Tốc độ hiện tại khi dừng lại là ${this.speed} km/h`);
    }
}
const myVehicle = new Vehicle();
myVehicle.speedUp(30);
myVehicle.slowDown(10);
myVehicle.speedUp(15);
myVehicle.stop();
