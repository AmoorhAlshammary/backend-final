const express = require("express");
const reservationRoute = express.Router();

const { getReservation, addReservation, deleteReservation, getUserReservation } = require("../controllers/Reservation");
const {authentication} = require("../middlewares/Authentication")

reservationRoute.get("/reservation" , authentication, getReservation);
reservationRoute.get("/reservation/:userId", authentication, getUserReservation);
reservationRoute.post("/reservation", authentication, addReservation);
reservationRoute.delete("/reservation/:id",authentication, deleteReservation);

module.exports = reservationRoute;
