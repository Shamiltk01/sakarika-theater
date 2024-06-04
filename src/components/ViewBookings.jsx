import React, { useEffect, useState } from "react";
import Navi from "./Navi";
import axios from "axios";

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [input, setInput] = useState({
    date: "",
    time: "",
  });
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fetchBookings = () => {
    if (input.date === "" || input.time === "") {
      alert("please provide date and time");
    }
    axios
      .post("https://movie-app-backend-1.onrender.com/booking/viewSeats", input)
      .then((response) => {
        setBookings(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("bookings", bookings);
  console.log("input", input);
  return (
    <div>
      <Navi />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="dateandtime" style={{ justifyContent: "center" }}>
              <input
                type="date"
                name="date"
                value={input.date}
                id=""
                onChange={handleInput}
                className="form-control"
                style={{
                  width: "140px",
                  height: "60px",
                  marginLeft: "40px",
                  marginBottom: "20px",
                }}
              />
              <select
                name="time"
                id=""
                onChange={handleInput}
                value={input.time}
                className="form-control"
                style={{
                  width: "140px",
                  height: "60px",
                  marginLeft: "40px",
                  marginBottom: "20px",
                }}
              >
                <option value="">Select Time</option>
                <option value="10 AM">10 AM</option>
                <option value="1 PM">1 PM</option>
                <option value="4 PM">4 PM</option>
                <option value="7 PM">7 PM</option>
              </select>
              <button
                className="btn btn-success"
                style={{
                  width: "140px",
                  height: "60px",
                  marginLeft: "40px",
                  marginBottom: "20px",
                }}
                onClick={fetchBookings}
              >
                Search
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <table class="table table-dark table-striped-columns">
                <thead>
                  <tr>
                    <th scope="col">Sl No.</th>
                    <th scope="col">Officer Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Time slot</th>
                    <th scope="col">Ground Floor Seats Booked</th>
                    <th scope="col">Balconey Seats Booked</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((value, index) => {
                    return (
                      <tr>
                        <th>1</th>
                        <td>{value.userId.logname}</td>
                        <td>{value.date}</td>
                        <td>{value.time}</td>
                        <td>
                          {value.groundFloor
                            ? value.groundFloor
                            : "No Ticket Booked On Ground Floor"}
                        </td>
                        <td>
                          {value.balcony
                            ? value.balcony
                            : "No Ticket Booked On Balcony"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBookings;
