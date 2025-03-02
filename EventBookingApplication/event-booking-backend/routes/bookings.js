const express = require("express");
const Booking = require("../models/Booking");
const router = express.Router();

// Create Booking
router.post("/", async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.json(booking);
});

// Get User's Bookings
router.get("/:userId", async (req, res) => {
  const bookings = await Booking.find({ user: req.params.userId }).populate("event");
  res.json(bookings);
});

module.exports = router;
