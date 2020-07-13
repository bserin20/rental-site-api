const mongoose = require("mongoose");
const winston = require("winston");

const options = {
  reconnectTries: 3,
  reconnectInterval: 500,
  connectTimeoutMS: 1000,
};

module.exports = function () {
  mongoose
    .connect("mongodb://localhost/vidly", options)
    .then(() => winston.info("Connected to MongoDB..."))
    .catch((err) => winston.error("Could not connect to MongoDB..."));
};
