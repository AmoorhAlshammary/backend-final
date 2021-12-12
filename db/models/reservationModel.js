const mongoose = require ("mongoose")

const reservationModel = new mongoose.Schema({
    name: { type : String },
    startData: { type : String },
    expiryData: {type : String},
    user: {type:mongoose.Schema.ObjectId, ref:"userModel"},
    reservation: {type:mongoose.Schema.ObjectId, ref:"reservationsModel"},
});

module.exports = mongoose.model("reservationModel", reservationModel)