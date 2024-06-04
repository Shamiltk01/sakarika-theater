import React, { useEffect, useState, useRef } from "react";
import QRCode from 'qrcode.react';
import "../styles/viewmybookings.css";
import axios from "axios";
import html2canvas from "html2canvas";
import download from "downloadjs";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ViewmyBookings = () => {
  const [bookingData, setBookingData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const bookingCardRefs = useRef([]); // Use an array of refs to capture multiple elements
  const navigate = useNavigate();

  const fetchData = () => {
    axios
      .post("https://movie-app-backend-1.onrender.com/user/viewMybookings", {
        userId: sessionStorage.getItem("sessionId"),
      })
      .then((response) => {
        const responseData = response.data.data;
        const filteredData = responseData.map((booking) => ({
          movie: sessionStorage.getItem("movieName"),
          logname: booking.userId.logname,
          logemail: booking.userId.logemail,
          date: new Date(booking.date), // Parse date string to Date object
          time: booking.time,
          groundFloor: booking.groundFloor || "No ground seats booked",
          balcony: booking.balcony || "No balcony seats booked"
        }));
        setBookingData(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter bookings based on selected date
  const filteredBookings = bookingData.filter((booking) => {
    return booking.date.toDateString() === selectedDate.toDateString();
  });

  const handleDownload = (index) => {
    if (!bookingCardRefs.current[index]) return;

    html2canvas(bookingCardRefs.current[index]).then((canvas) => {
      canvas.toBlob((blob) => {
        download(blob, `booking_card_${index}.jpg`, "image/jpeg");
      });
    });
  };

  const handleGoBack = () => {
    navigate("/userprofile");
  };

  return (
    <div className="view-my-bookings-container">
      {/* Date picker to select booking date */}
      Select Date:
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        className="date-picker"
      /> 
      
      {/* Render multiple booking cards for the selected date */}
      {filteredBookings.length > 0 ? (
        filteredBookings.map((booking, index) => (
          <div key={index} className="booking-card" ref={(el) => (bookingCardRefs.current[index] = el)}>
            <h2>My Booked Seats</h2>
            <p><strong>Movie:</strong> {booking.movie}</p>
            <p><strong>Date:</strong> {booking.date.toLocaleDateString()}</p>
            <p><strong>Time:</strong> {booking.time}</p>
            <p><strong>Ground Floor Seats:</strong> {booking.groundFloor}</p>
            <p><strong>Balcony Seats:</strong> {booking.balcony}</p>
            <div className="qr-code-container">
              <QRCode value={JSON.stringify(booking)} />
            </div>
            {/* Download button for each booking card */}
            <button className="download-button" onClick={() => handleDownload(index)}>
              Download Ticket
            </button>
          </div>
        ))
      ) : (
        <p>No bookings found for the selected date</p>
      )}

      {/* Position the "Go back" button at the top left */}
      <button className="back-button" onClick={handleGoBack}>
        Go back to My Profile
      </button>
    </div>
  );
}

export default ViewmyBookings;
