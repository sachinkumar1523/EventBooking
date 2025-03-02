const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  paymentStatus: { type: String, enum: ["pending", "paid"], default: "pending" }
});

module.exports = mongoose.model("Booking", BookingSchema);
