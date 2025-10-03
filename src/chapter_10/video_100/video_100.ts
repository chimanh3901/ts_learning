export { };
console.log("Video 100");

//Literal types là kiểu dữ liệu mà giá trị của biến được giới hạn chỉ trong một số giá trị cụ thể
type TRole = string | number;

type TSuperRole = "USER" | "ADMIN" | "SUPERADMIN";

const user: TRole = "USER";
const admin: TRole = "ADMIN";
const superAdmin: TRole = "SUPERADMIN";

const otherRole: TSuperRole = "ADMIN";

enum EnumRole {
    USER = "USER",
    ADMIN = "ADMIN",
    SUPERADMIN = "SUPERADMIN"
}

const myRole1: EnumRole = EnumRole.ADMIN;
const myRole2: EnumRole = EnumRole.USER;
const myRole3: EnumRole = EnumRole.SUPERADMIN;

console.log("Enum Role 1:", myRole1);
console.log("Enum Role 2:", myRole2);
console.log("Enum Role 3:", myRole3);



