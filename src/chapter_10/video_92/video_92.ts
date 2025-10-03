console.log("Video 92");

const sayHi = (name: string) => {
    console.log("Say Hi...", name);
}
sayHi("Manh");

//Infer: tự động đoán type (đoán kiểu dữ liệu)
const sum = (a: number, b: number) => {
    return a + b;
}

//Khai báo đầy đủ
//Nếu chỉ quan tâm đến logic function => Để có TS tự động check type
//Nếu hard code dữ liệu => Khai báo type => Khai báo bên phải sau khi khai báo tham số
const sum2 = (a: number, b: number): number => {
    return a + b;
}

const mySum = sum(10, 20);

console.log("Sum", mySum);

