export { };
console.log("Lab 06");

/*
type TStudent = {
    id: number,
    name: string,
    email: string,
    isPremium: boolean,
    contact: string | number
}

type TCourse = {
    courseID: number,
    title: string,
    price: number,
    students: object[]
}

const student1: TStudent = {
    id: 1,
    name: "Ben",
    email: "ben@gmail.com",
    isPremium: false,
    contact: 1231231231
}

const student2: TStudent = {
    id: 2,
    name: "Toni",
    email: "toni@gmail.com",
    isPremium: true,
    contact: "toni@gmail.com"
}

const student3: TStudent = {
    id: 3,
    name: "Alice",
    email: "alice@gmail.com",
    isPremium: false,
    contact: 1231231
}

const course: TCourse = {
    courseID: 69,
    title: "Study with me",
    price: 69,
    students: [student1, student2]
}

const registerStudentToCourse = (student: TStudent, course: TCourse) => {
    return course.students.push(student);
}

const printCourseInfo = (course: TCourse) => {
    console.log("Tên khóa học:", course.title);
    console.log("Số học viên:", course.students.length);
    if (course.students.length === 0) {
        console.log("Không có học viên nào");
    }
}

const main = () => {
    registerStudentToCourse(student3, course);
    printCourseInfo(course);
}

main();
*/


//Bài chữa
type TStudent = {
    id: number,
    name: string,
    email: string,
    isPremium: boolean,
    contact: string | number
}

type TCourse = {
    courseId: number,
    title: string,
    price: number,
    students: TStudent[] //Truyền một mảng vào object bằng cách gọi lại Type và thêm []
}

const student1: TStudent = {
    id: 1,
    name: "Manh",
    email: "manh@gmail.com",
    isPremium: true,
    contact: 1231231231
}

const student2: TStudent = {
    id: 2,
    name: "Ben",
    email: "ben@gmail.com",
    isPremium: false,
    contact: "ben@gmail.com"
}

const student3: TStudent = {
    id: 3,
    name: "John",
    email: "john@gmail.com",
    isPremium: true,
    contact: "john@gmail.com"
}

const course: TCourse = {
    courseId: 69,
    title: "TypeScript",
    price: 69000,
    students: []
}

const registerStudentToCourse = (student: TStudent, course: TCourse) => {
    course.students.push(student);
}

const printCourseInfo = (course: TCourse) => {
    console.log("Tên khóa học:", course.title);
    console.log("Số lượng học sinh:", course.students.length);
    if (course.students.length === 0) {
        console.log("Không có học viên nào đăng ký")
    } else {
        // const studentName = course.students.map(st => st.name);
        // console.log("Tên học sinh:", studentName.join(","));
        const studentList = course.students;
        studentList.forEach((st, index) => {
            console.log("Tên học sinh:", st.name);
        })
    }
}

registerStudentToCourse(student3, course);
registerStudentToCourse(student2, course)
registerStudentToCourse(student1, course);
printCourseInfo(course);







