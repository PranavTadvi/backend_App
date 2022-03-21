const mongoose = require("mongoose");

const testObj = new mongoose.Schema({
  name: String,
  email: String,
});

module.exports = mongoose.model("testing_obj", testObj);
