let app = require("./app/toyRobotApp");
const helper = require("./app/helper");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let args = [];
rl.on("line", function (line) {
  args.push(line);
  if (helper.isValidFirstCommand(args)) {
    let re = app.run(args);
    if (line === "REPORT") {
      console.log(args,re);
      process.exit(0);
    }
  } else {
    console.error("First command is not place");
    args = [];
  }
});
