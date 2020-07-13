const config = require("config");

module.exports = function () {
  if (!config.get("changeLaterPrivateKey")) {
    throw new Error("FATAL ERROR: changeLaterPrivateKey is not defined.");
  }
};
