export { };
console.log("Video 95");

type TStudent = {
    id: number,
    name: string,
    age: number,
    address: string,
    phone?: number
}

const student1: TStudent = {
    id: 1,
    name: "Manh",
    age: 69,
    address: "Ha Noi",
}

const student2: TStudent = {
    id: 2,
    name: "Vu",
    age: 68,
    address: "Ho Chi Minh",
    phone: 128319231
}

const getInfo = (st: TStudent) => {
    console.log("Student Name:", st.name);
}

getInfo(student1);
getInfo(student2);