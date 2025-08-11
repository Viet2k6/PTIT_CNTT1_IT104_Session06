//Abstract method là phương thức không có phần thân và buộc lớp con phải định nghĩa lại
//method thường là phương thức có phần thân và thực hiện hành động cụ thể ngay trong lớp.

abstract class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  //method 
  printName(): void {
    console.log(`Tên động vật: ${this.name}`);
  }
  //abstract method
  abstract makeSound(): void;
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeSound(): void {
    console.log("Gâu gâu");
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeSound(): void {
    console.log("Meo meo");
  }
}


