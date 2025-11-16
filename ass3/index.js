// Student Class
class Student {
    constructor(name, rollNo, marks) {
        this.name = name;
        this.rollNo = rollNo;
        this.marks = marks;
    }

    // Method to check pass/fail
    isPassed() {
        return this.marks > 40;
    }
}

// Create multiple students (array of objects)
const students = [
    new Student("Saurabh", 1, 85),
    new Student("Rahul", 2, 35),
    new Student("Priya", 3, 55),
    new Student("Amit", 4, 28),
    new Student("Neha", 5, 72)
];

// Filter students who passed
const passedStudents = students.filter(student => student.isPassed());

// Print names of passed students (using map)
const result = passedStudents.map(s => `${s.name} passed with ${s.marks} marks.`);

console.log(result);