const express = require("express");
const decorationRoute = express.Router();

const { getdecoration, postdecoration } = require("../controllers/Decoration");
const {authentication} = require("../middlewares/Authentication")

decorationRoute.get("/decoration" ,authentication, getdecoration);
decorationRoute.post("/decoration",authentication, postdecoration);

module.exports = decorationRoute;
