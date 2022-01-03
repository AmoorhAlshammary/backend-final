const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://amirah:123@cluster0.kqgcx.mongodb.net/Decoration?retryWrites=true&w=majority ").then(
  () => {
    console.log("DB connected");
  },
  (err) => {
    console.log(err);
  }
);
