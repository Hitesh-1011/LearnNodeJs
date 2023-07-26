// CommonJs, Every file is module (by default)
// Modules - Encapsulated Code

const john = "John";

const peter = "Peter";

const sayHi = (name) => {
  console.log(`hello there ${name}`);
};

require("./7-mind-grenade");

sayHi("Susan");

sayHi(john);

sayHi(peter);
