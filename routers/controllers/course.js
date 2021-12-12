const courseModel= require("../../db/models/courseModel")


const getCourses = async (req,res)=>{
    try {
         const courses = await courseModel.find({});
        res.status(200).json(courses)
    } catch (error){
        res.send(error)
    }
}

const postCourse= async (req, res)=>{
    const { newName, newDescription, newImg } = req.body;
    const newCourse = new courseModel({name:newName, description:newDescription, img:newImg})
    try {
        const savedCourse = await newCourse.save()
         const courses = await courseModel.find({});
        res.status(200).json(courses)

    }catch (error){
        res.send(error)
    }
}

const deleteCourse = async (req, res) => {
  const id = req.params.id;
  try {
    const course = await courseModel.findOneAndDelete({ _id: id });
    res.status(200).json(course);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { getCourses, postCourse, deleteCourse };