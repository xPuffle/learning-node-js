const SUPER_SECRET = "Super Secret string"
// This variable is only available in this "module" (file)

const john = "John";
const peter = "Peter"

function sayHi(name) {
    console.log("Hello there, " + name + "!")
}

// export default
module.exports = {

    john, 
    peter,

    sayHi,

}; // Can export values and functions.