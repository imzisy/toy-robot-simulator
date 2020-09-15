const expect = require("chai").expect;
const app = require("../app/toyRobotApp");

describe("Color Code Converter", function () {
  it("case 1", function () {
    const commands = ["PLACE 0,0,NORTH", "MOVE", "REPORT"];
    let result = app.run(commands);
    expect(result).to.equal("0,1,NORTH");
  });

  it("case 2", function () {
    const commands = ["PLACE 0,0,NORTH", "LEFT", "REPORT"];
    let result = app.run(commands);
    expect(result).to.equal("0,0,WEST");
  });

  it("case 3", function () {
    const commands = [
      "PLACE 1,2,EAST",
      "MOVE",
      "MOVE",
      "LEFT",
      "MOVE",
      "REPORT",
    ];
    let result = app.run(commands);
    expect(result).to.equal("3,3,NORTH");
  });
});
