console.log("Video 94");

const person: {
    name: string,
    age: number,
    address: string,
    phone?: number
} = {
    name: "Manh Vu",
    age: 69,
    address: "Ha Noi"
}

const printName = (person: {
    name: string,
    age: number,
    address: string,
    phone?: number
}) => {
    console.log("My name:", person.name);
}

printName(person);