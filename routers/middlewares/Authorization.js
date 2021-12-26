const jwt = require("jsonwebtoken");

const UserModel = require('../../db/models/UserModel')

const adminAuthorization = async (req, res, next) => {
  try {
    // we passed the user from the authentication through the req object
    const userData = req.user;
    try {
      const foundUser = await UserModel.findById(userData.userId);
      if(!foundUser){
        return res.status(403).json({error: 'no user found'});
      }
      if(!foundUser.isAdmin){
        return res.status(403).json({error: 'you do not have permission'});
      }
      next()
    } catch (error) {
      console.log(error)
      return res.status(500).json({error: 'server error'}) 
    }
  } catch (error) {
    console.log(error)
    return res.status(403).json({error: 'no token found'});
    // res.send(JSON.stringify(error));
  }
};

module.exports = { adminAuthorization };