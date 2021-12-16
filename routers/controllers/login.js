const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../../db/models/UserModel.js");

// falsy values = 0 "" null undefined false 

const login = async (req, res) => {
  let { email, password } = req.body;

  try {
    // البحث بقاعدة البيانات على مستخدم بنفس البريد المرسل
    const user = await userModel.findOne({ email: email });
    // console.log(user);
    if (user) { 
      // مقارنة تشفير كلمة المرور
      const see = await bcrypt.compare(password, user.password);
      // check if the value of see is true
      if (see === true) {
        // تجهيز البيانات التي ستحفظ في التوكن
        const payload = { userId: user._id, username: user.username };
        // تقوم بانشاء توكن : نص مشفر بالمعلومات الخاصة بالمستخدم
        const token = jwt.sign(payload, "ABC");
        res.status(200).json({ token });
        // res.status(200).json(`Hello admain! ${user.name}`);
      } else {// if password doesn't match
        res.status(403).json("wrong PassWord!");
      }
    } else {// if user is null
      res.status(404).json("wrong Email!");
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = { login };

