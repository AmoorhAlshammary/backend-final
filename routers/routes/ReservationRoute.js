const express = require("express");
const reservationRoute = express.Router();

const { getReservation, addReservation, updateReservation, deleteReservation, getUserReservation } = require("../controllers/Reservation");
const {authentication} = require("../middlewares/Authentication")
const {adminAuthorization} = require("../middlewares/Authorization")

reservationRoute.get("/reservation" , authentication, adminAuthorization, getReservation);
reservationRoute.get("/reservation/:userId", authentication, getUserReservation);
reservationRoute.post("/reservation", authentication, addReservation);
reservationRoute.put("/reservation",authentication, updateReservation);
reservationRoute.delete("/reservation/:id",authentication, deleteReservation);

module.exports = reservationRoute;
