const express = require("express");
const courseRoute = express.Router();

const { getCourses, postCourse, deleteCourse } = require("../controllers/course");

courseRoute.get("/courses", getCourses);
courseRoute.post("/course", postCourse);
courseRoute.delete("/course/:id", deleteCourse);

module.exports = courseRoute;
