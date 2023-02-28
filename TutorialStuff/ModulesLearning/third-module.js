const num1 = 5;
const num2 = 10;

function addValues(numb1, numb2) {

    if (numb1 && numb2) {
        console.log(numb1 + numb2)
    } else {
        console.log(5 + 10)
    }

}

function startUpFunction() {

    console.log("LOADED THIRD MODULE")

}

startUpFunction();

module.exports.addValues = addValues;