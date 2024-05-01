const express = require("express");
const bookingModel = require("../models/bookingModel");

const router = express.Router();

//view booked seats according to date and time
router.post("/viewSeats", async (req, res) => {
  try {
    let input = req.body;
    let inputDate = input.date;
    let inputTime = input.time;
    let seats = await bookingModel
      .find({ date: inputDate, time: inputTime })
      .populate("userId", "-logpass -__v")
      .exec();
    return res.status(200).json({
      status: "success",
      data: seats,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "somthing went wrong in view seats",
    });
  }
});

//book seats
router.post("/book", async (req, res) => {
  try {
    let input = req.body;
    let newBooking = new bookingModel(input);
    await newBooking.save();
    return res.status(200).json({
      status: "success",
      message: "successfully booked seats",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "success",
      message: "somthing went wrong in book seats",
    });
  }
});
module.exports = router;
