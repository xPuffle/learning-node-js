// File sync module
// This module deals with reading/writing to files

const { readFileSync, writeFileSync } = require('fs');

// readFileSync(Path, Encoder)
// Reads the file's data with the specified encoder

const first_text_Data = readFileSync("TutorialStuff/content/subfolder/first-text.txt", "utf8");
const second_text_Data = readFileSync("TutorialStuff/content/subfolder/second-text.txt", "utf8");

console.log(first_text_Data);
console.log(second_text_Data);

// writeFileSync(Path, Data, {flag:""})
// Overwrites the file specified with the data specified

writeFileSync("TutorialStuff/content/third-text.txt", "Hello world");

const third_text_Data = readFileSync("TutorialStuff/content/third-text.txt", "utf8");
console.log(third_text_Data);

// writeFileSync flags
// {flag: 'a'} -- Appends data to end of file

writeFileSync("TutorialStuff/content/third-text.txt", "!", {flag: 'a'});

const new_third_text_Data = readFileSync("TutorialStuff/content/third-text.txt", "utf8");
console.log(new_third_text_Data);