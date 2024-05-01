import React, { useEffect, useState } from "react";
import "../styles/userprofile.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProfile = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const fetchData = () => {
    axios
      .post("https://movie-app-backend-1.onrender.com/user/viewMybookings", {
        userId: sessionStorage.getItem("sessionId"),
      })
      .then((response) => {
        setBookings(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("sessionId"); // Clear session storage
    navigate("/smovie"); // Redirect to login page after logout
  };

  const viewBookings = () => {
    navigate("/viewmytickets");
  };
  const handleback = () => {
    navigate("/smovie");
  };

  return (
    <div className="wrapper">
      <div className="profile">
        <div className="overlay">
          <div className="about">
            {/* Render user's name and email from the first booking (assuming there's at least one booking) */}
            {bookings.length > 0 && (
              <>
                <h4>Name: {bookings[0].userId.logname}</h4>
                <span>Email: {bookings[0].userId.logemail}</span>
              </>
            )}
          </div>
          <ul className="social-icons">
            <button className="btn-success" onClick={viewBookings}>
              My Bookings
            </button>
            <button className="btn-logout" onClick={handleLogout}>
              Logout
            </button>
            <button className="btn-prev" onClick={handleback}>
              Go to Previous Page
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
