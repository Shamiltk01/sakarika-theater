import React, { useState } from "react";
import Navi from "./Navi";
import axios from "axios";

const DeleteMovie = () => {
  const [input, setInput] = useState({
    movie: "",
  });
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleDeleteMovie = () => {
    axios
      .post("https://movie-app-backend-s5np.onrender.com/movie/delete", input)
      .then((response) => {
        if (response.data.status === "success") {
          alert(response.data.message);
          setInput({
            movie: "",
          });
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(input);
  return (
    <div>
      <Navi />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <col className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
          <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div class="card text-center colored-card">
                <div class="card-body">
                  <p class="card-text">
                    <label htmlFor="" className="form-label colored-label">
                      Delete Upcoming Movie
                    </label>
                    <input
                      type="text"
                      name="movie"
                      value={input.movie}
                      onChange={handleInput}
                      className="form-control"
                      placeholder="Movie Name"
                    />
                  </p>
                  <button
                    className="btn btn-danger"
                    onClick={handleDeleteMovie}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteMovie;
