"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Video 93");
//Union type
let username = "abcd@gmail.com";
username = 123456;
username = "1231231";
const printUsername = (username) => {
    if (typeof (username) === "string") {
        console.log("Username", username.toLowerCase());
    }
};
printUsername("Manh");
