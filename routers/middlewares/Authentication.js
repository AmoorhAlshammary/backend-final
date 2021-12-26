const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  try {
    // console.log(req.headers.authorization)
    // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWJhNjNkMmJmYzcwYmFkODIwOWI1NWUiLCJ1c2VybmFtZSI6IkFiZHVsYXppeiIsImlhdCI6MTYzOTYwODUyN30.gxipipilB1HwlyNUlBqQBLYiAv5NGXKZIp8c7bOKm6A"
    // ['Bearer', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWJhNjNkMmJmYzcwYmFkODIwOWI1NWUiLCJ1c2VybmFtZSI6IkFiZHVsYXppeiIsImlhdCI6MTYzOTYwODUyN30.gxipipilB1HwlyNUlBqQBLYiAv5NGXKZIp8c7bOKm6A']
    // استخراج التوكن من الريكويست
    const token = req.headers.authorization.split(" ")[1];
    // console.log(token)
    // يفك تشفير التوكن ويتأكد ان التوكن صحيح
    // التوكن الخاطئ رح يطلع خطأ
    const user = jwt.verify(token, "ABC");
    req.user = user;
    // console.log(userData);
    next();
  } catch (error) {
    console.log(error)
    return res.status(403).json({error: 'no token found'});
    // res.send(JSON.stringify(error));
  }
};

module.exports = { authentication };