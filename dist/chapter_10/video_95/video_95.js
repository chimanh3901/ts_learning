"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Video 95");
const student1 = {
    id: 1,
    name: "Manh",
    age: 69,
    address: "Ha Noi",
};
const student2 = {
    id: 2,
    name: "Vu",
    age: 68,
    address: "Ho Chi Minh",
    phone: 128319231
};
const getInfo = (st) => {
    console.log("Student Name:", st.name);
};
getInfo(student1);
getInfo(student2);
