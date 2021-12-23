const express = require("express");
const bcrypt = require('bcrypt')
const app = express();
const cors = require("cors");
require("./db/db");
app.use(express.json());
app.use(cors());


const UserModel = require('./db/models/UserModel');



// انشاء مدير نظام اذا لم يوجد
UserModel.findOne({username:'admin'}, (err, doc)=>{
    if(err){
        console.log(err);
    }
    if(!doc){
        bcrypt.hash("123456", 10, (err, password) =>{
            if(err){
                console.log(err);
            }
            UserModel.create({username: 'admin',email:"admin@admin.com", password, isAdmin: true});
        })
        
    }
})



const DecorationRoute = require("./routers/routes/DecorationRoute")
const ReservationRoute = require("./routers/routes/ReservationRoute")
const SignUpRoute = require("./routers/routes/SignUpRoute")
const LoginRoute  = require("./routers/routes/LoginRoute")
//const ReservationRoute = require("./routers/routes/ReservationRoute")
app.use(DecorationRoute)
app.use(ReservationRoute)
app.use(SignUpRoute)
app.use(LoginRoute)
// app.use(ReservationRoute)

///////////c 




////////////////////////////
const Port = 5000;
app.listen(Port,()=>{
    console.log("server is running"+Port);
})
