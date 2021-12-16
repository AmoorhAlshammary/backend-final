const DecorationModel = require("../../db/models/DecorationModel")

const getdecoration = async (req , res)=>{
  try {
      // const allDecorations = await DecorationModel.find({});
      const allDecorations = [{name: 'skldfj', price: 23}, {name: 'skldfj', price: 23}]
      res.status(200).json(allDecorations)
  } catch (error) {
      
  }
 
}

const postdecoration = async (req, res) => {
  const { name, description, img , price} = req.body;
   const user = req.token.userId;
   const newDecoration = new DecorationModel({ name, description, img, user ,price});
  try {
   const response= await newDecoration.save();
    res.status(201).json(response);
  } catch (error) {
    res.send(error);
  }
};
const deletdecoration = async (req,res)=>{
  const id = req.params.id;
  const user = req.token.userId;
  console.log(user);
  try {
    const delet = await DecorationModel.findByIdAndDelete({ _id:id ,user :user});
    res.status(201).json (delet)
  } catch (error) {
   res.send("error")
  }
};
const deleteAlldecoration = async (req , res)=>{
           
  try {
     const deletej = await DecorationModel.remove()
     const cour = await DecorationModel.find({})
     res.status(200).json(cour)
 } catch (error) {
     res.status(403).json(error)
 }
 }



module.exports = {getdecoration, postdecoration ,deletdecoration , deleteAlldecoration}