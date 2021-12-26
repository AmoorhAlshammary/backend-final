const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
const userModel = new mongoose.Schema({
  username: {type: String},
  email: {type: String, unique: true},
  password: {type: String}, 
  isActive: {type: Boolean},// true - false
  isAdmin: {type: Boolean, default: false},
  likes: [{type: mongoose.Schema.ObjectId, ref: 'decorationModel'}]
})

module.exports = mongoose.model("userModel", userModel);