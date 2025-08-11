interface changeSpeed {
  speedUp(amount: number): void;
  slowDown(amount: number): void;
  stop(): void;
}

class Vehicle implements changeSpeed {
  private speed: number;
  constructor() {
    this.speed = 0;
  }
  speedUp(amount: number): void {
    this.speed += amount;
    console.log(`Tốc độ hiện tại khi tăng tốc là ${this.speed} km/h`);
  }
  slowDown(amount: number): void {
    this.speed = Math.max(0, this.speed - amount);
    console.log(`Tốc độ hiện tại khi giảm tốc là ${this.speed} km/h`);
  }
  stop(): void {
    this.speed = 0;
    console.log(`Tốc độ hiện tại khi dừng lại là ${this.speed} km/h`);
  }
}

const myVehicle = new Vehicle();
myVehicle.speedUp(30);
myVehicle.slowDown(10);
myVehicle.speedUp(15);
myVehicle.stop();
