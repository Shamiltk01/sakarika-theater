import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import homelogo from '../images/home.png'

const SigninSignUp = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    logname: "",
    logpass: "",
    logemail: "",
  });
  const signupHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const signUpGet = () => {
    axios.post("https://movie-app-backend-s5np.onrender.com/user/signup", input).then((response) => {
      alert(response.data.status);
      setInput({
        logname: "",
        logpass: "",
        logemail: "",
      });
    });
  };

  const signInGet = () => {
    axios.post("https://movie-app-backend-s5np.onrender.com/user/signin", input).then((response) => {
      if (response.data.status === "user success") {
        sessionStorage.setItem("sessionId", response.data.userData._id);
        navigate("/smovie");
      } else if (response.data.status === "admin success") {
        sessionStorage.setItem("sessionId", response.data.adminData._id);
        navigate("/acceptuser");
      } else {
        alert(response.data.status);
      }
      setInput({
        logname: "",
        logpass: "",
        logemail: "",
      });
    });
  };

  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <div className={`section full-height ${isSignUp ? "signup-mode" : ""}`}>
      <Link to="/" className="logo">
        <img
          src={homelogo}
          alt=""
        />
      </Link>

      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-12 text-center align-self-center py-5">
            <div className="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 className="mb-0 pb-3">
                <span onClick={() => setIsSignUp(false)}>Log In </span>
                <span onClick={() => setIsSignUp(true)}>Sign Up</span>
              </h6>
              <input
                className="checkbox"
                type="checkbox"
                id="reg-log"
                name="reg-log"
                checked={isSignUp}
                onChange={toggleForm}
              />
              <label htmlFor="reg-log"></label>
              <div className="card-3d-wrap mx-auto">
                <div
                  className={`card-3d-wrapper ${isSignUp ? "is-signup" : ""}`}
                >
                  <div className="card-front">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Log In</h4>
                        <div className="form-group">
                          <input
                            type="email"
                            name="logemail"
                            className="form-style"
                            placeholder="Your Email"
                            id="logemail"
                            autoComplete="off"
                            value={input.logemail}
                            onChange={signupHandler}
                          />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            name="logpass"
                            className="form-style"
                            placeholder="Your Password"
                            id="logpass"
                            autoComplete="off"
                            value={input.logpass}
                            onChange={signupHandler}
                          />
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <button className="btn1 mt-4" onClick={signInGet}>
                          Submit
                        </button>
                        <p className="mb-0 mt-4 text-center">
                          <Link href="#0" className="link">
                            Forgot your password?
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card-back">
                    <div className="center-wrap">
                      <div className="section text-center">
                        <h4 className="mb-4 pb-3">Sign Up</h4>
                        <div className="form-group">
                          <input
                            type="text"
                            name="logname"
                            className="form-style"
                            placeholder="Your Full Name"
                            id="logname"
                            autoComplete="off"
                            value={input.logname}
                            onChange={signupHandler}
                          />
                          <i className="input-icon uil uil-user"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="email"
                            name="logemail"
                            className="form-style"
                            placeholder="Your Email"
                            id="logemail"
                            autoComplete="off"
                            value={input.logemail}
                            onChange={signupHandler}
                          />
                          <i className="input-icon uil uil-at"></i>
                        </div>
                        <div className="form-group mt-2">
                          <input
                            type="password"
                            name="logpass"
                            className="form-style"
                            placeholder="Your Password"
                            id="logpass"
                            autoComplete="off"
                            value={input.logpass}
                            onChange={signupHandler}
                          />
                          <i className="input-icon uil uil-lock-alt"></i>
                        </div>
                        <button className="btn1 mt-4" onClick={signUpGet}>
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninSignUp;
