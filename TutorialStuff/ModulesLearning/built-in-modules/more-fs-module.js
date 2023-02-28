// File sync module
// This module deals with reading/writing to files

const { readFileSync, writeFileSync } = require('fs');

console.log("Start.");

const first_text_Data = readFileSync("TutorialStuff/content/subfolder/first-text.txt", "utf8");
const second_text_Data = readFileSync("TutorialStuff/content/subfolder/second-text.txt", "utf8");

writeFileSync(

    "TutorialStuff/content/third-text.txt", 
    
    "!", 

    {flag: 'a'}

);

console.log("Done with this task.");
console.log("Starting next task.");