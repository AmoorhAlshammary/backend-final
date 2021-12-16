const mongoose = require("mongoose");


const decorationModel = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  img: { type: String },
  price: {type:Number}
});

module.exports = mongoose.model("decorationModel", decorationModel);
