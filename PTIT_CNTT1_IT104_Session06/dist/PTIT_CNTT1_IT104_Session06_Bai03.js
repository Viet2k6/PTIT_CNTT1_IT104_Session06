"use strict";
//Abstract method là phương thức không có phần thân và buộc lớp con phải định nghĩa lại
//method thường là phương thức có phần thân và thực hiện hành động cụ thể ngay trong lớp.
class Animal {
    constructor(name) {
        this.name = name;
    }
    //method 
    printName() {
        console.log(`Tên động vật: ${this.name}`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log("Gâu gâu");
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log("Meo meo");
    }
}
