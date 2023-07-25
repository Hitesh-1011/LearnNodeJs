// CommonJs, Every file is module (by default)
// Modules - Encapsulated Code

const names = require("./4-names");
// destructure
// const { john, peter } = require("./4-names");

const sayHi = require("./5-utils");

sayHi("Susan");

sayHi(names.john);

sayHi(names.peter);
