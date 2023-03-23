// Modules
// CommonJS, Every file is a module by default
// Modules - Encapsulated code (only share minimum)
const john = "john";
const peter = "peter";
const secret = "Super Secret";

const sayHi = (name) => {
  console.log(`Hello there, ${name}!`);
};

sayHi("Bernice");
sayHi(john);
sayHi(peter);
