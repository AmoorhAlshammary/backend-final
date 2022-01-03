const express =require ("express")
const loginRoute= express.Router()

const {login}=require("../controllers/login")

// http://localhost:5000/login
loginRoute.post("/login",login)


module.exports=loginRoute 