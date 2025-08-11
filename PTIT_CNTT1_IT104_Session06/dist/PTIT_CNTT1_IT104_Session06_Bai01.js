"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`${this.getName()} có chiều rộng ${this.width} và chiều cao ${this.height}`);
    }
}
const rect = new Rectangle("Hình chữ nhật", 10, 5);
rect.getSize();
