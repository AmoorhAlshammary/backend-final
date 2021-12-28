const express = require("express");
const decorationRoute = express.Router();

const { getDecoration,getOneDecoration, addDecoration, updateDecoration, deleteDecoration } = require("../controllers/Decoration");
const {authentication} = require("../middlewares/Authentication");

decorationRoute.get("/decoration" , authentication, getDecoration);
decorationRoute.get("/decoration/:id" , authentication, getOneDecoration);
decorationRoute.post("/decoration", authentication, addDecoration);
decorationRoute.put("/decoration",authentication, updateDecoration);
decorationRoute.delete("/decoration/:id",authentication, deleteDecoration);

module.exports = decorationRoute;
