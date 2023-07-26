const path = require("path");

console.log("path : ", path.sep);

const filePath = path.join("/content/", "subfolder", "test.text");

console.log("filePath : ", filePath);

const base = path.basename(filePath);

console.log("base : ", base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.text");

console.log("absolute : ", absolute);
