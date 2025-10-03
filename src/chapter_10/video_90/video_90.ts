export { };
console.log("Video 90");
// function test(name) {

// }

//Unknown nghĩa là "không xác định", yêu cầu phải "kiểm tra type" trước khi thao tác với biến số đấy
let name: unknown = "Manh";
if (typeof (name) === "string") {
    name.toUpperCase();
}

let name1: any = "Vu";
name1.toUpperCase();

let name2: string = "Name";
name2.toUpperCase();
