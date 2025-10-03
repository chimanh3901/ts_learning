"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Video 100");
const user = "USER";
const admin = "ADMIN";
const superAdmin = "SUPERADMIN";
const otherRole = "ADMIN";
var EnumRole;
(function (EnumRole) {
    EnumRole["USER"] = "USER";
    EnumRole["ADMIN"] = "ADMIN";
    EnumRole["SUPERADMIN"] = "SUPERADMIN";
})(EnumRole || (EnumRole = {}));
const myRole1 = EnumRole.ADMIN;
const myRole2 = EnumRole.USER;
const myRole3 = EnumRole.SUPERADMIN;
console.log("Enum Role 1:", myRole1);
console.log("Enum Role 2:", myRole2);
console.log("Enum Role 3:", myRole3);
