const os = require("os");

// Info of the current user
const user = os.userInfo();
console.log("user", user);

// system uptime
console.log(`The System Uptime is ${os.uptime} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMen: os.freemem(),
};

console.log("currentOS", currentOS);
