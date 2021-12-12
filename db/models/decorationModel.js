const mongoose = require("mongoose");

const decorationModel = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  img: { type: String },
});

module.exports = mongoose.model("decorationModel", decorationModel);
