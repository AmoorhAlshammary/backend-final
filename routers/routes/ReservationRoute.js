const express = require("express");
const reservationRoute = express.Router();

const { getReservation, addReservation, updateReservation, deleteReservation } = require("../controllers/Reservation");
const {authentication} = require("../middlewares/Authentication")

reservationRoute.get("/reservation" , authentication, getReservation);
reservationRoute.post("/reservation", authentication, addReservation);
reservationRoute.put("/reservation",authentication, updateReservation);
reservationRoute.delete("/reservation/:id",authentication, deleteReservation);

module.exports = reservationRoute;
