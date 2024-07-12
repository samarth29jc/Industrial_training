
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.age = 20;
        this.grade = "Final Year";
        this.subjects = ["DSA", "System Design"];
    }

    getInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}, Subjects: ${this.subjects.join(", ")}`;
    }
}


let students = [];

students.push(new Student(1, "Samarth Mishra"));
students.push(new Student(2, "rohit patidar"));
students.push(new Student(3, "sachin"));
students.push(new Student(4, "sunil"));
students.push(new Student(5, "saksham"));
students.push(new Student(6, "rishabh "));
students.push(new Student(7, "riya goel"));
students.push(new Student(8, "tanay"));
students.push(new Student(9, "guts"));
students.push(new Student(10, "griffith"));

students.forEach(student => {
    console.log(student.getInfo());
});
