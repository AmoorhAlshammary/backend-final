const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../../db/models/UserModel.js");
const ReservationModel = require('../../db/models/ReservationModel');
// falsy values = 0 "" null undefined false 

const login = async (req, res) => {
  let { email, password } = req.body;

  try {
    // البحث بقاعدة البيانات على مستخدم بنفس البريد المرسل
    const user = await UserModel.findOne({ email: email });
    // console.log(user);
    if (user) { 
      // مقارنة تشفير كلمة المرور
      const passwordValid = await bcrypt.compare(password, user.password);
      // check if the value of passwordValid is true
      if (passwordValid === true) {
        // تجهيز البيانات التي ستحفظ في التوكن
        const payload = { userId: user._id, username: user.username, isAdmin: user.isAdmin};
        // تقوم بانشاء توكن : نص مشفر بالمعلومات الخاصة بالمستخدم
        //  ينرسل التوكن لامن المستخدم يسوي تسجيل دخول 
        const token = jwt.sign(payload, "ABC");
        // sending specific data to the end-user
        const toSendUser = {_id: user._id, email: user.email, isActive: user.isActive, isAdmin: user.isAdmin, likes: user.likes};
        res.status(200).json({ token, user:toSendUser });
      } else {// if password doesn't match
        res.status(403).json("wrong Password!");
      }
    } else {// if user is null
      res.status(404).json({msg:"wrong Email!"});
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = { login };

