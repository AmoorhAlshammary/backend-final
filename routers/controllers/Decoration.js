const DecorationModel = require("../../db/models/DecorationModel")

const getdecoration = async (req , res)=>{
  try {
      
      // const allDecorations = [{name: 'amirah', price: 23 , description:'aaa' ,img:'url'}]
      const allDecorations = await DecorationModel.find({});
      res.status(200).json(allDecorations)
  } catch (error) {
    res.send(error);  
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


module.exports = {getdecoration, postdecoration }