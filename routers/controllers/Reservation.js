const ReservationModel = require("../../db/models/ReservationModel")


const getReservation = async (req , res)=>{

  try {
      
      const allReservations = await ReservationModel.find({}).populate(['user', 'decoration']);
      // console.log(allReservations)
      res.status(200).json(allReservations)
  } catch (error) {
    res.send(error);  
  }
 
}

const getUserReservation = async (req , res)=>{
  const {userId} = req.params;
  // console.log(userId)
  try {
      const allReservations = await ReservationModel.find({user:userId}).populate(['user', 'decoration']);
      // console.log(allReservations)
      res.status(200).json(allReservations)
  } catch (error) {
    res.send(error);  
  }
 
}

const addReservation = async (req, res) => {
  const {decorationId, userId, date} = req.body;
  // console.log(req.body)
  try {
    const newReservation = new ReservationModel({user:userId, decoration:decorationId, date});
    const response = await newReservation.save();
    res.status(201).json(response);
  } catch (error) {
    res.send(error);
  }
};


const deleteReservation = async (req, res)=>{
  const {id} = req.params;
  try {
    const response = await ReservationModel.findByIdAndDelete(id);
    res.status(201).json(response)
  } catch (error) {
    console.log(error)
    res.send(error);
  }
}


module.exports = {getReservation, addReservation, deleteReservation, getUserReservation }