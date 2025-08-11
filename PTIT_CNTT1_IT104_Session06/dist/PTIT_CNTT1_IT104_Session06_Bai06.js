"use strict";
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
const allStudents = [
    new Student(1, "Thành"),
    new Student(2, "Việt"),
    new Student(3, "Hùng"),
    new Student(4, "Hưng"),
    new Student(5, "Linh"),
    new Student(6, "Vinh"),
];
class ClassRoom {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    showStudents() {
        console.log("Danh sách học sinh:");
        this.students.forEach((student) => {
            console.log(`ID: ${student.getId()}, Tên: ${student.getName()}`);
        });
    }
    filterStudent(id) {
        return this.students.filter((student) => student.getId() === id);
    }
    addStudentInClass(id, allStudents) {
        const index = allStudents.findIndex((student) => student.getId() === id);
        if (index !== -1) {
            this.addStudent(allStudents[index]);
            allStudents.splice(index, 1);
            console.log(`Thêm thành công.`);
        }
        else {
            console.log(`Không tìm thấy học sinh có ID ${id}.`);
        }
    }
}
const classA = new ClassRoom();
const classB = new ClassRoom();
classA.addStudentInClass(1, allStudents);
classA.addStudentInClass(2, allStudents);
classA.addStudentInClass(3, allStudents);
classB.addStudentInClass(4, allStudents);
classB.addStudentInClass(5, allStudents);
classB.addStudentInClass(6, allStudents);
console.log("Lớp A:");
classA.showStudents();
console.log("Lớp B:");
classB.showStudents();
