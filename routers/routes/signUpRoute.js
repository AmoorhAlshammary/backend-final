const express = require ("express")
const signupRoute = express.Router()

const {SignUp} = require("../controllers/SignUp")


signupRoute.post("/signup",SignUp)


module.exports = signupRoute 