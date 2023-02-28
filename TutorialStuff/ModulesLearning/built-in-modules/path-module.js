// path module
// This module deals with directory paths

const path = require('path');

console.log("----------------------------------------")

// path.sep
// Returns normalized resulting path for the machine

console.log(path.sep);
console.log();

// path.join("String", "String", "String", ...);
// Joins the arguments using the correct file path seperator

const filePath = path.join("/TutorialStuff/", "ModulesLearning", "os-module.js");
console.log(filePath);
console.log();

// path.basename(filePath);
// Returns the base (last) file in the normalized file path

const base = path.basename(filePath);
console.log(base);
console.log();

// path.resolve("String", "String", "String", ...);
// Returns the absolute file path

const absolutePath = path.resolve(__dirname, "TutorialStuff", "ModulesLearning", "os.module.js");
console.log(absolutePath);



console.log("----------------------------------------");