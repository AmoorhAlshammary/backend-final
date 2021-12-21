const bcrypt = require("bcrypt");
const { signUp} = require("jsonwebtoken");

const userModel = require("../../db/models/UserModel");

const SignUp = async (req, res) => {
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  // Es6 
  // let { username, email, password } = req.body;
  try {
    // تشفير للباسورد
    password = await bcrypt.hash(password, 10);
    // مستخدم جديد
    const newUser = await new userModel({username, email, password, isActive:true});
    // حفظ المستخدم في قاعدة البيانات
    const response = await newUser.save();
    res.status(201).json(response)
  } catch (error) {
    console.log('this error in sign up function :', error)
    res.status(500).json(error)
  }
};

module.exports={SignUp};