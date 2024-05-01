const mongoose = require("mongoose");

const movieModel = new mongoose.Schema({
  previousMovie: {
    type: String,
  },
  movieName: {
    type: String,
  },
  upcomingMovie: {
    type: String,
  },
});

module.exports = mongoose.model("movies", movieModel);
