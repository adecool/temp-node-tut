//CommonJs, every file is a module by default
// Modules - Encapsulated code (only share minimum)

const john = 'john';
const peter = 'peter';
const susan = 'susan';

const sayHi = (name) => {
    console.log(`hello ${name}`);
}

sayHi(john);
sayHi(peter);
sayHi(susan);