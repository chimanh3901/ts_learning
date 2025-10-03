"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Lab 06");
const student1 = {
    id: 1,
    name: "Manh",
    email: "manh@gmail.com",
    isPremium: true,
    contact: 1231231231
};
const student2 = {
    id: 2,
    name: "Ben",
    email: "ben@gmail.com",
    isPremium: false,
    contact: "ben@gmail.com"
};
const student3 = {
    id: 3,
    name: "John",
    email: "john@gmail.com",
    isPremium: true,
    contact: "john@gmail.com"
};
const course = {
    courseId: 69,
    title: "TypeScript",
    price: 69000,
    students: []
};
const registerStudentToCourse = (student, course) => {
    course.students.push(student);
};
const printCourseInfo = (course) => {
    console.log("Tên khóa học:", course.title);
    console.log("Số lượng học sinh:", course.students.length);
    if (course.students.length === 0) {
        console.log("Không có học viên nào đăng ký");
    }
    else {
        // const studentName = course.students.map(st => st.name);
        // console.log("Tên học sinh:", studentName.join(","));
        const studentList = course.students;
        studentList.forEach((st, index) => {
            console.log("Tên học sinh:", st.name);
        });
    }
};
registerStudentToCourse(student3, course);
registerStudentToCourse(student2, course);
registerStudentToCourse(student1, course);
printCourseInfo(course);
