export { };
console.log("Video 93");

//Union type
let username: string | number = "abcd@gmail.com";

username = 123456;

username = "1231231";

const printUsername = (username: string | number) => {
    if (typeof (username) === "string") {
        console.log("Username", username.toLowerCase());
    }
}

printUsername("Manh");


