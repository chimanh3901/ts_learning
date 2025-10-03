"use strict";
console.log("Video 92");
const sayHi = (name) => {
    console.log("Say Hi...", name);
};
sayHi("Manh");
//Infer: tự động đoán type (đoán kiểu dữ liệu)
const sum = (a, b) => {
    return a + b;
};
//Khai báo đầy đủ
//Nếu chỉ quan tâm đến logic function => Để có TS tự động check type
//Nếu hard code dữ liệu => Khai báo type => Khai báo bên phải sau khi khai báo tham số
const sum2 = (a, b) => {
    return a + b;
};
const mySum = sum(10, 20);
console.log("Sum", mySum);
