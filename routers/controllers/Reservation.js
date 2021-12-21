const ReservationModel = require("../../db/models/ReservationModel")
const UserModel = require('../../db/models/UserModel')
const DecorationModel = require('../../db/models/DecorationModel')


const getReservation = async (req , res)=>{
  
  try {
      
      const allReservations = await ReservationModel.find({});
      // console.log(allReservations)
      res.status(200).json(allReservations)
  } catch (error) {
    res.send(error);  
  }
 
}

const addReservation = async (req, res) => {
  const {decorationId, userId, date} = req.body;
  console.log(req.body)
  try {
    const foundUser = await UserModel.findById(userId);
    const foundDecoration = await DecorationModel.findById(decorationId);
    console.log(foundUser) // {_id: '2kj3h432kl5523h', name:'Amirah', username:'am', email:'a@a.com', password:'lskjdfklh2k3h423k4h23876823dsfk', isAdmin:false, isActive: true}
    console.log(foundDecoration) // {_id: '2kj3h432kl5523hsdfdsfw', name:'Kitchen', description:'this is description', price:234, img:'https://image.com' }
    if(!foundUser || !foundDecoration){
        return res.status(404).json({msg: 'there is no user or decoration with that id'})
    }
    const newReservation = new ReservationModel({user:foundUser.id, decoration:foundDecoration.id, date});
    const response = await newReservation.save();
    res.status(201).json(response);
  } catch (error) {
    res.send(error);
  }
};

const updateReservation = async (req, res) => {
  const { id, userId, decorationId, date} = req.body;
  try {
    const foundReservation = await ReservationModel.findById(id);
    const foundUser = await UserModel.findById(userId);
    const foundDecoration = await DecorationModel.findById(decorationId);
    console.log(foundUser) // {_id: '2kj3h432kl5523h', name:'Amirah', username:'am', email:'a@a.com', password:'lskjdfklh2k3h423k4h23876823dsfk', isAdmin:false, isActive: true}
    console.log(foundDecoration) // {_id: '2kj3h432kl5523hsdfdsfw', name:'Kitchen', description:'this is description', price:234, img:'https://image.com' }
    if(!foundReservation || !foundUser || !foundDecoration){
        return res.status(404).json({msg: 'there is no reservation, user or decoration with that id'});
    }
    const response = await ReservationModel.findByIdAndUpdate(id,{user:foundUser.id, decoration: foundDecoration.id, date},{new:true})
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


module.exports = {getReservation, addReservation, updateReservation, deleteReservation }