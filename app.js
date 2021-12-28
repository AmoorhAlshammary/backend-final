const express = require("express");
const bcrypt = require('bcrypt');
const cors = require("cors");

const app = express();

require("./db/db");
app.use(express.json());
app.use(cors());

const UserModel = require('./db/models/UserModel');
UserModel.findOne({username: 'admin'}, (err, doc)=>{
    if(err){
        console.log(err);
        return
    }
    if(!doc){
        bcrypt.hash("123456", 10, (err, password)=>{
            if(err){
                console.log(err)
                return;
            }
    
            UserModel.create({username: 'admin', email:'admin@admin.com', password, isAdmin: true, isActive: true}, 
            (err)=>{ 
                if(err){
                    console.log(err)
                    return;
                }
            });
        })
    }
})



const DecorationRoute = require("./routers/routes/DecorationRoute")
const ReservationRoute = require("./routers/routes/ReservationRoute")
const SignUpRoute = require("./routers/routes/SignUpRoute")
const LoginRoute  = require("./routers/routes/LoginRoute")

app.use(DecorationRoute)
app.use(ReservationRoute)
app.use(SignUpRoute)
app.use(LoginRoute)



const Port = 5000;
app.listen(Port,()=>{
    console.log("server is running"+Port);
})
