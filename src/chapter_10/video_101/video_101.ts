export { };
console.log("Video 101");

type TTuple = [string, number, boolean?]; //Quy định số lượng phần tử 3
//Dấu chấm hỏi để cho thấy phần tử đó có thể xuất hiện hoặc không (optional)


const test = ["Manh", 25, true]; //Mảng không giới hạn số lượng phần tử

const test1: TTuple = ["Manh", 3, true];

const test2: TTuple = ["Manh", 6];