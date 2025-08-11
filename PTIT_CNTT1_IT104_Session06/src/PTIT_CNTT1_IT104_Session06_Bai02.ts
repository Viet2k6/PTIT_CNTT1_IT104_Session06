abstract class Job {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
  printType(): void {
    console.log(`Loại công việc: ${this.type}`);
  }
  abstract calculateSalary(): number;
}

class ParttimeJob extends Job {
  workingHour: number;
  constructor(type: string, workingHour: number) {
    super(type);
    this.workingHour = workingHour;
  }
  calculateSalary(): number {
    return 30000 * this.workingHour;
  }
}

class FulltimeJob extends Job {
  constructor(type: string) {
    super(type);
  }
  calculateSalary(): number {
    return 10000000;
  }
}

const newPart = new ParttimeJob("Part-time", 70);
const newFull = new FulltimeJob("Full-time");
newFull.printType();
console.log(`Lương fullTime: ${newFull.calculateSalary()}`);
newPart.printType();
console.log(`Lương partTime: ${newPart.calculateSalary()}`);

