// File async module
// This module deals with reading/writing to files

const { readFile, writeFile } = require('fs');
const { connected } = require('process');


// readFile(Path, Encoder, (error, result)=>{})
// Reads the file's data with the specified encoder and returns its contents in the result parameter

readFile("TutorialStuff/content/subfolder/first-text.txt", "utf8", (err, result)=>{

    if (err) {
        return;
    } else {
        console.log(result);
    }

    const first_text_Data = result;

    readFile("TutorialStuff/content/subfolder/second-text.txt", "utf8", (err, res) =>{
        if (err) {
            return;
        } else {
            console.log(res);
        }
    
        const second_text_Data = res;

        writeFile("TutorialStuff/content/third-text.txt", "Third text file overwritten asynchronously", (err, res)=>{

            if (err) {
                return;
            } else {
                console.log(res);
            }

        })

    })

});