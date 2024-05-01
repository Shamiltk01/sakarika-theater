import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist/umd/react-router-dom.development";

const Navi = () => {
  const navigate=useNavigate()
  const [loggedIn, setLoggedIn] = useState(false);
  const sessionId = sessionStorage.getItem("sessionId");
  useEffect(() => {
    if (sessionId) {
      setLoggedIn(true);
    }
  });
  const logout=()=>{
    sessionStorage.clear()
    navigate("/signin")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-gradient">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img
              src="https://www.shutterstock.com/image-vector/ticket-vector-icon-600w-691375591.jpg"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Sagarika
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/acceptuser">
                  Approve User
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/moviebooking">
                  Add Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/deletemovie">
                  Delete Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/viewbooking">
                  View Bookings
                </Link>
              </li>
              <li className="nav-item">
                {loggedIn ? (
                  <button
                    className="btn btn-outline-light"
                    onClick={() => {
                      logout();
                    }}
                  >
                    Logout
                  </button>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navi;
