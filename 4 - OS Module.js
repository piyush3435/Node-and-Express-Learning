const os = require('os')

// Info the current user 
const user = os.userInfo();
console.log(user);

// Uptime of the system
console.log(`The uptime of the system is ${parseInt(os.uptime)} seconds.`);
console.log(`The uptime of the system is ${parseInt(os.uptime / (60))} minutes.`);
console.log(`The uptime of the system is ${parseInt(os.uptime / (60 * 60))} hours.`);
console.log(`The uptime of the system is ${parseInt(os.uptime / (60 * 60 * 24))} days.`);

//Info of the Operating System
const osInfo = {
    Name: os.type(),
    Release: os.release(),
    Total_Memory: `${(os.totalmem() / (1024 * 1024 * 1024)).toPrecision(2)} GB`,
    Free_Memory: `${(os.freemem() / (1024 * 1024 * 1024)).toPrecision(2)} GB`,
    Arch: os.arch()
}
console.log(osInfo);





