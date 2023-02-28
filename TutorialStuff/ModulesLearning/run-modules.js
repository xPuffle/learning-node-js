// Modules - Encapsulated code (only share minimum)
// CommonJS, every file is a module (by default)
// Allows you to grab js code from other .js files (Like ModuleScript in roblox)

const firstModule = require("./first-module")
const secondModule = require("./second-module")
const thirdModule = require("./third-module")

// console.log("-------------------------------------");

// console.log(firstModule)
// console.log("-------------------------------------");
// console.log(secondModule)
// console.log("-------------------------------------");
// console.log(thirdModule)
// console.log("-------------------------------------");

// const sayHi = firstModule.sayHi;

// sayHi("Susan")
// sayHi(firstModule.john)
// sayHi(firstModule.peter)

// console.log("-------------------------------------");


// const items = secondModule.items;
// const singlePerson = secondModule.singlePerson;

// console.log(items)
// console.log(singlePerson)
// console.log(singlePerson.cred_cardNumber)

console.log("-------------------------------------");

const addValues = thirdModule.addValues;

addValues(1, 5)