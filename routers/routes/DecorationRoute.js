const express = require("express");
const decorationRoute = express.Router();

const { getDecoration,getOneDecoration, addDecoration, updateDecoration, deleteDecoration } = require("../controllers/Decoration");
const {authentication} = require("../middlewares/Authentication");
const { adminAuthorization } = require("../middlewares/Authorization");

decorationRoute.get("/decoration" , authentication, getDecoration);
decorationRoute.get("/decoration/:id" , authentication, getOneDecoration);
decorationRoute.post("/decoration", authentication, adminAuthorization, addDecoration);
decorationRoute.put("/decoration",authentication, adminAuthorization, updateDecoration);
decorationRoute.delete("/decoration/:id",authentication, adminAuthorization, deleteDecoration);

module.exports = decorationRoute;
