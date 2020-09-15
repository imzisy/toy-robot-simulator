const Robot = require("./models/Robot");
const TableTop = require("./models/TableTop");
const helper = require("./helper");

let tableTop = new TableTop(5, 5);
let robot = new Robot();

function TheToyRobotApp() {}

TheToyRobotApp.run = function (commands) {
  for (let i = 0; i < commands.length; i++) {
    let command = commands[i];
    switch (helper.getCommandWithoutArguments(command)) {
      case "PLACE":
        let placeArguments = helper.getCommandArguments(command);
        let xPostion = placeArguments[0];
        let yPostion = placeArguments[1];
        let facing = placeArguments[2];
        //Robot is not in the table
        if (xPostion >= tableTop.xSize && yPostion >= tableTop.ySize) {
          console.error("Robot position out of table top");
          return;
        }
        robot.place(xPostion, yPostion, facing);
        break;
      case "MOVE":
        robot.move(tableTop);
        break;
      case "LEFT":
      case "RIGHT":
        robot.rotate(command);
        break;
      case "REPORT":
        return `${robot.x},${robot.y},${robot.facing}`;
      default:
    }
  }
};

module.exports = TheToyRobotApp;
