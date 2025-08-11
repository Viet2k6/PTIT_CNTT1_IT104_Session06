class Student2 {
  private id: number;
  private name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  getId(): number {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  setName(newName: string): void {
    this.name = newName;
  }
}

const allStudents2: Student2[] = [
  new Student2(1, "Thành"),
  new Student2(2, "Việt"),
  new Student2(3, "Hùng"),
  new Student2(4, "Hưng"),
  new Student2(5, "Linh"),
  new Student2(6, "Vinh"),
];

class ClassRoom2 {
  private students: Student2[] = [];
  addStudent(student: Student2): void {
    this.students.push(student);
  }

  showStudents(): void {
    console.log("Danh sách học sinh:");
    this.students.forEach((student) => {
      console.log(`ID: ${student.getId()}, Tên: ${student.getName()}`);
    });
  }

  filterStudent(id: number): Student2[] {
    return this.students.filter((student) => student.getId() === id);
  }

  addStudentInClass(id: number, allStudents: Student2[]): void {
    const index = allStudents.findIndex((student) => student.getId() === id);
    if (index !== -1) {
      this.addStudent(allStudents[index]);
      allStudents.splice(index, 1);
      console.log(`Thêm thành công.`);
    } else {
      console.log(`Không tìm thấy học sinh có ID ${id}.`);
    }
  }

  removeStudent(id: number, allStudents: Student2[]): void {
    const index = this.students.findIndex((student) => student.getId() === id);
    if (index !== -1) {
      const removedStudent = this.students.splice(index, 1)[0];
      allStudents.push(removedStudent);
      console.log(`Đã xóa học sinh ID ${id} khỏi lớp.`);
    } else {
      console.log(`Không tìm thấy học sinh có ID ${id} trong lớp.`);
    }
  }

  editStudent(id: number, newName: string): void {
    const studentToEdit = this.students.find((studentItem) => studentItem.getId() === id);
    if (studentToEdit) {
      studentToEdit.setName(newName);
      console.log(`Đã cập nhật tên học sinh ID ${id} thành "${newName}".`);
    } else {
      console.log(`Không tìm thấy học sinh có ID ${id} để cập nhật.`);
    }
  }
}


const classC = new ClassRoom2();
const classD = new ClassRoom2();
classC.addStudentInClass(1, allStudents2);
classC.addStudentInClass(2, allStudents2);
classC.addStudentInClass(3, allStudents2);
classD.addStudentInClass(4, allStudents2);
classD.addStudentInClass(5, allStudents2);
classD.addStudentInClass(6, allStudents2);
console.log("Lớp C:");
classC.showStudents();
console.log("Lớp D:");
classD.showStudents();
classD.removeStudent(5, allStudents2);
classC.editStudent(2, "Huy");
console.log("Sau khi thay đổi:");
console.log("Lớp C:");
classC.showStudents();
console.log("Lớp D:");
classD.showStudents();

