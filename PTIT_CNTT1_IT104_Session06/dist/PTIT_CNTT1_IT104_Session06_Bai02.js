"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        console.log(`Loại công việc: ${this.type}`);
    }
}
class ParttimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        return 10000000;
    }
}
const newPart = new ParttimeJob("Part-time", 70);
const newFull = new FulltimeJob("Full-time");
newFull.printType();
console.log(`Lương fullTime: ${newFull.calculateSalary()}`);
newPart.printType();
console.log(`Lương partTime: ${newPart.calculateSalary()}`);
