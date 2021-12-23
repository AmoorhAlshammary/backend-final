const DecorationModel = require("../../db/models/DecorationModel")

const getDecoration = async (req , res)=>{
  
  try {
      
      // const allDecorations = [{name: 'amirah', price: 23 , description:'aaa' ,img:'url'}]
      const allDecorations = await DecorationModel.find({});
      // console.log(allDecorations)
      res.status(200).json(allDecorations)
  } catch (error) {
    res.send(error);  
  }
 
}

const getOneDecoration = async (req, res)=>{
  // console.log(req.params.id)
  try{
    const oneDecoration = await DecorationModel.findById(req.params.id);
    // console.log(oneDecoration)
    res.status(200).json(oneDecoration)
  }catch(error){
    res.send(error);
  }
}

const addDecoration = async (req, res) => {
  const { name, description, img , price} = req.body;
  // اوبجيكت جديد بناءا على المودل
  // محفوظ في ذاكرة السيرفر
   const newDecoration = new DecorationModel({ name, description, img ,price});
  try {
    // يتم الحفظ في قاعدة البيانات
   const response= await newDecoration.save();
    res.status(201).json(response);
  } catch (error) {
    res.send(error);
  }
};

const updateDecoration = async (req, res) => {
  const { id, name, description, img , price} = req.body;
  try {
    const response = await DecorationModel.findByIdAndUpdate(id,{name, description, img, price},{new:true})
    res.status(201).json(response);
  } catch (error) {
    res.send(error);
  }
};

const deleteDecoration = async (req, res)=>{
  const {id} = req.params;
  try {
    const response = await DecorationModel.findByIdAndDelete(id);
    res.status(201).json(response)
  } catch (error) {
    console.log(error)
    res.send(error);
  }
}


module.exports = {getDecoration, getOneDecoration, addDecoration, updateDecoration, deleteDecoration }