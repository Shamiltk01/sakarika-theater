import React from "react";
import Navi from "./Navi";
import { useState } from "react";
import axios from "axios";

const AdimAdd = () => {
  const [input, setInput] = new useState({
    movieName: "",
  });
  const [upcomingMovie, setUpcomingMovie] = useState({
    upcomingMovie: "",
  });
  const inputHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  const upcomingHandler = (e) => {
    setUpcomingMovie({ ...input, [e.target.name]: e.target.value });
  };
  const readValues = () => {
    axios.post("http://localhost:3001/movie/add", input).then((response) => {
      alert(response.data.status);
      setInput({
        movieName: "",
      });
    });
  };
  const handleUpdateMovie = () => {
    axios
      .post("http://localhost:3001/movie/upcomingMovie", upcomingMovie)
      .then((response) => {
        if (response.data.status === "success") {
          alert(response.data.status);
        }
      });
  };

  return (
    <div>
      <Navi />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label colored-label">
                  Present Movie Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="movieName"
                  value={input.movieName}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label colored-label">
                  Upcoming Movie Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="upcomingMovie"
                  value={upcomingMovie.upcomingMovie}
                  onChange={upcomingHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={readValues}>
                  Submit
                </button>
                <button
                  className="btn btn-success"
                  onClick={handleUpdateMovie}
                  style={{ marginLeft: "600px" }}
                >
                  upcoming Movie Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdimAdd;
