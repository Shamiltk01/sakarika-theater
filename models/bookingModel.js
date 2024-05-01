const mongoose = require("mongoose");

const bookingModel = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  movieId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"movies",
    required:true
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  groundFloor: {
    type: String,
  },
  balcony: {
    type: String,
  },
});

module.exports = mongoose.model("bookings", bookingModel);
