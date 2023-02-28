/* 

GLOBALS - NO WINDOW (Unlike Browser JS)

__dirname   - path to current directory
__filename  - filename
require     - function to use modules (CommonJS)
module      - info about current module (js file)
process     - info about env (enviorment) where the program is being executed

*/

let a = setInterval(() => {

    console.log("Hello world!");
    
    clearInterval(a);

}, 1000);