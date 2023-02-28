// os module
// This module returns vital data about the machine that node is running on

const os = require("os")


// os.userInfo();
// Returns info about the current user

const user = os.userInfo()
console.log(user);

// os.uptime();
// Returns the system uptime in seconds

const uptimeInSeconds = os.uptime();

console.log(uptimeInSeconds);
console.log(`This machine has been running for ${Math.floor(uptimeInSeconds/60/60)} hours or ${uptimeInSeconds} seconds`)

// os.type();
// Returns the name of the machine

// os.release();
// Returns the release/version of the machine

// os.totalmem();
// Returns the total memory the machine has

// os.freemem();
// Returns the total free memory the machine has

const currentOSInfo = {

    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),

}

console.log(currentOSInfo);