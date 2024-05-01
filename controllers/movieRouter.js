const express = require("express");
const movieModel = require("../models/movieModel");

const router = express.Router();

//addMovie
router.post("/add", async (req, res) => {
  try {
    const movieName = req.body.movieName;
    let data = await movieModel.findOne();
    data.previousMovie = data.movieName;
    data.movieName = movieName;
    await data.save()
    return res.json({
      status: "success",
      message: "successfully adeded",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "somthing went wrong in add movie.",
    });
  }
});

//add upcoming movie
router.post("/upcomingMovie", async (req, res) => {
  try {
    let upcomingMovie = req.body.upcomingMovie;
    let data = await movieModel.findOne();
    data.upcomingMovie = upcomingMovie;
    await data.save()
    return res.json({
      status: "success",
      message: "successfully added upcoming movie",
    });
  } catch (error) {
    console.error(error);
    return res.json({
      status: "error",
      message: "internal server error",
    });
  }
});

//view all movies
router.get("/viewall", async (req, res) => {
  try {
    let data = await movieModel.find();
    return res.json({
      status: "success",
      movies: data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      message: "somthing went wrong in view all movies.",
    });
  }
});

//delete movie
router.post("/delete", async (req, res) => {
  try {
    let input = req.body.movie;
    let data = await movieModel.findOne({ upcomingMovie: input });
    if (!data) {
      return res.json({
        status: "error",
        message: "no data found",
      });
    }
    data.movieName = " ";
    await data.save();
    return res.json({
      status: "success",
      message: "movie successfully deleted",
    });
  } catch (error) {
    console.error(error);
    return res.json({
      status: "success",
      message: "internal server error",
      error: error.message,
    });
  }
});



module.exports = router;
