abstract class Shape {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName(): string {
    return this.name;
  }
  abstract getSize(): void;
}

class Rectangle extends Shape {
  width: number;
  height: number;
  constructor(name: string, width: number, height: number) {
    super(name);
    this.width = width;
    this.height = height;
  }
  getSize(): void {
    console.log(`${this.getName()} có chiều rộng ${this.width} và chiều cao ${this.height}`);
  }
}

const rect = new Rectangle("Hình chữ nhật", 10, 5);
rect.getSize();
