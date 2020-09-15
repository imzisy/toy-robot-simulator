/***
 * Check if the first command is PLACE command
 * @returns {boolean}
 */
exports.isValidFirstCommand = function (commands) {
  var firstCommand = commands[0];
  var firstCommandUppercase = firstCommand.toUpperCase();

  var commandDetails = firstCommandUppercase.split(" ");
  if (commandDetails[0] == "PLACE") {
    return true;
  }
  return false;
};
/***
 * Get command
 * @param command
 * @returns {*}
 */
exports.getCommandWithoutArguments = function (command) {
  if (command.indexOf(" ") == -1) {
    return command;
  }
  return command.slice(0, command.indexOf(" "));
};

/***
 *  Get command arguments
 * @param command
 * @returns {Array}
 */
exports.getCommandArguments = function (command) {
  var spaceIndex = command.indexOf(" ");
  var argumentString = command.slice(spaceIndex);
  var argumentArray = argumentString.split(",");
  var argumentArrayWithoutSpace = argumentArray.map(function (s) {
    return s.trim();
  });
  return argumentArrayWithoutSpace;
};
