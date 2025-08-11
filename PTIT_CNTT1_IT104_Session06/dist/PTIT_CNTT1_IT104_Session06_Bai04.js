"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle2 {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(5);
const rectangle = new Rectangle2(4, 6);
console.log("Hình tròn:");
console.log(`Chu vi: ${circle.calculatePerimeter()}`);
console.log(`Diện tích: ${circle.calculateArea()}`);
console.log("Hình chữ nhật:");
console.log(`Chu vi: ${rectangle.calculatePerimeter()}`);
console.log(`Diện tích: ${rectangle.calculateArea()}`);
