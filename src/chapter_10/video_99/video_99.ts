export { };
console.log("Video 99");

type TName = string | null;

let name: TName = null;

const age = undefined;

const printName = (myName: TName) => {
    if (myName) {
        console.log("My name:", myName.toUpperCase());
    }
}
