import React, { useEffect, useState } from "react";
import "../styles/ticketbooking.css"; // Adjust the path to your CSS file
import axios from "axios";
import { VscLightbulb } from "react-icons/vsc";

const TicketBooking = () => {
  const balconyRows = [
    [
      "A1",
      "A2",
      "A3",
      "A4",
      "A5",
      "A6",
      "",
      "A7",
      "A8",
      "A9",
      "A10",
      "A11",
      "A12",
      "A13",
      "A14",
      "A15",
      "A16",
      "A17",
      "A18",
      "",
      "A19",
      "A20",
      "A21",
      "A22",
      "A23",
      "A24",
    ],
    [
      "B1",
      "B2",
      "B3",
      "B4",
      "B5",
      "B6",
      "",
      "B7",
      "B8",
      "B9",
      "B10",
      "B11",
      "B12",
      "B13",
      "B14",
      "B15",
      "B16",
      "B17",
      "B18",
      "",
      "B19",
      "B20",
      "B21",
      "B22",
      "B23",
      "B24",
    ],
    [
      "C1",
      "C2",
      "C3",
      "C4",
      "C5",
      "C6",
      "",
      "C7",
      "C8",
      "C9",
      "C10",
      "C11",
      "C12",
      "C13",
      "C14",
      "C15",
      "C16",
      "C17",
      "C18",
      "",
      "C19",
      "C20",
      "C21",
      "C22",
      "C23",
      "C24",
    ],
    [
      "D1",
      "D2",
      "D3",
      "D4",
      "D5",
      "D6",
      "",
      "D7",
      "D8",
      "D9",
      "D10",
      "D11",
      "D12",
      "D13",
      "D14",
      "D15",
      "D16",
      "D17",
      "D18",
      "",
      "D19",
      "D20",
      "D21",
      "D22",
      "D23",
      "D24",
    ],
    [
      "E1",
      "E2",
      "E3",
      "E4",
      "E5",
      "E6",
      "",
      "E7",
      "E8",
      "E9",
      "E10",
      "E11",
      "E12",
      "E13",
      "E14",
      "E15",
      "E16",
      "E17",
      "E18",
      "",
      "E19",
      "E20",
      "E21",
      "E22",
      "E23",
      "E24",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  ];

  const groundFloorRows = [
    [
      "A1",
      "A2",
      "A3",
      "A4",
      "A5",
      "A6",
      "A7",
      "A8",
      "A9",
      "A10",
      "A11",
      "A12",
      "",
      "A13",
      "A14",
      "A15",
      "A16",
      "A17",
      "A18",
      "A19",
      "A20",
      "A21",
      "A22",
      "A23",
      "A24",
      "A25",
    ],
    [
      "",
      "B1",
      "B2",
      "B3",
      "B4",
      "B5",
      "B6",
      "B7",
      "B8",
      "B9",
      "B10",
      "B11",
      "",
      "B12",
      "B13",
      "B14",
      "B15",
      "B16",
      "B17",
      "B18",
      "B19",
      "B20",
      "B21",
      "B22",
      "B23",
      "",
    ],
    [
      "",
      "C1",
      "C2",
      "C3",
      "C4",
      "C5",
      "C6",
      "C7",
      "C8",
      "C9",
      "C10",
      "C11",
      "",
      "C12",
      "C13",
      "C14",
      "C15",
      "C16",
      "C17",
      "C18",
      "C19",
      "C20",
      "C21",
      "C22",
      "C23",
      "",
    ],
    [
      "",
      "D1",
      "D2",
      "D3",
      "D4",
      "D5",
      "D6",
      "D7",
      "D8",
      "D9",
      "D10",
      "D11",
      "",
      "D12",
      "D13",
      "D14",
      "D15",
      "D16",
      "D17",
      "D18",
      "D19",
      "D20",
      "D21",
      "D22",
      "D23",
      "",
    ],
    [
      "",
      "E1",
      "E2",
      "E3",
      "E4",
      "E5",
      "E6",
      "E7",
      "E8",
      "E9",
      "E10",
      "E11",
      "",
      "E12",
      "E13",
      "E14",
      "E15",
      "E16",
      "E17",
      "E18",
      "E19",
      "E20",
      "E21",
      "E22",
      "E23",
      "",
    ],
    [
      "",
      "F1",
      "F2",
      "F3",
      "F4",
      "F5",
      "F6",
      "F7",
      "F8",
      "F9",
      "F10",
      "F11",
      "",
      "F12",
      "F13",
      "F14",
      "F15",
      "F16",
      "F17",
      "F18",
      "F19",
      "F20",
      "F21",
      "F22",
      "F23",
      "",
    ],
    [
      "",
      "G1",
      "G2",
      "G3",
      "G4",
      "G5",
      "G6",
      "G7",
      "G8",
      "G9",
      "G10",
      "G11",
      "",
      "G12",
      "G13",
      "G14",
      "G15",
      "G16",
      "G17",
      "G18",
      "G19",
      "G20",
      "G21",
      "G22",
      "G23",
      "",
    ],
    [
      "",
      "",
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "H7",
      "H8",
      "H9",
      "H10",
      "",
      "H11",
      "H12",
      "H13",
      "H14",
      "H15",
      "H16",
      "H17",
      "H18",
      "H19",
      "H20",
      "H21",
      "",
      "",
    ],
    [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    [
      "",
      "I1",
      "I2",
      "I3",
      "I4",
      "I5",
      "I6",
      "I7",
      "I8",
      "I9",
      "I10",
      "I11",
      "",
      "I12",
      "I13",
      "I14",
      "I15",
      "I16",
      "I17",
      "I18",
      "I19",
      "I20",
      "I21",
      "I22",
      "I23",
      "",
    ],
    [
      "",
      "J1",
      "J2",
      "J3",
      "J4",
      "J5",
      "J6",
      "J7",
      "J8",
      "J9",
      "J10",
      "J11",
      "",
      "J12",
      "J13",
      "J14",
      "J15",
      "J16",
      "J17",
      "J18",
      "J19",
      "J20",
      "J21",
      "J22",
      "J23",
      "",
    ],
    [
      "",
      "K1",
      "K2",
      "K3",
      "K4",
      "K5",
      "K6",
      "K7",
      "K8",
      "K9",
      "K10",
      "K11",
      "",
      "K12",
      "K13",
      "K14",
      "K15",
      "K16",
      "K17",
      "K18",
      "K19",
      "K20",
      "K21",
      "K22",
      "K23",
      "",
    ],
    [
      "",
      "L1",
      "L2",
      "L3",
      "L4",
      "L5",
      "L6",
      "L7",
      "L8",
      "L9",
      "L10",
      "L11",
      "",
      "L12",
      "L13",
      "L14",
      "L15",
      "L16",
      "L17",
      "L18",
      "L19",
      "L20",
      "L21",
      "L22",
      "L23",
      "",
    ],
    [
      "",
      "",
      "M1",
      "M2",
      "M3",
      "M4",
      "M5",
      "M6",
      "M7",
      "M8",
      "M9",
      "M10",
      "",
      "M11",
      "M12",
      "M13",
      "M14",
      "M15",
      "M16",
      "M17",
      "M18",
      "M19",
      "M20",
      "M21",
      "",
      "",
    ],
  ];
  const [showTime, setShowTime] = useState("");
  const [showDate, setShowDate] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seats, setSeats] = useState([]);
  const [userId,setUserId]=useState("")

  const handleSeatClick = (rowIndex, seatIndex, location) => {
    let seatName;
    if (location === "Balcony") {
      seatName = balconyRows[rowIndex][seatIndex];
    } else if (location === "Ground Floor") {
      seatName = groundFloorRows[rowIndex][seatIndex];
    }

    // Only proceed if the clicked seat is not empty
    if (seatName !== "") {
      const seatId = `${location} - ${seatName}`;

      // Check if the seat is already booked, if yes, return
      if (seats.includes(seatId)) {
        return;
      }

      setSelectedSeats((prevSelectedSeats) => {
        if (prevSelectedSeats.includes(seatId)) {
          return prevSelectedSeats.filter((seat) => seat !== seatId);
        } else {
          return [...prevSelectedSeats, seatId];
        }
      });
    }
  };

  const bookSeats = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
    } else {
      const bookedSeats = selectedSeats.reduce((result, seat) => {
        const [location, seatInfo] = seat.split(" - ");
        if (!result[location]) {
          result[location] = [];
        }
        result[location].push(seatInfo);
        return result;
      }, {});

      const groundFloor = bookedSeats["Ground Floor"] || [];
      const balcony = bookedSeats["Balcony"] || [];

      const bookedSeatsText = Object.entries(bookedSeats)
        .map(([location, seats]) => `${location} - ${seats.join(",")}`)
        .join(" & ");

      sessionStorage.setItem("bookedSeats", bookedSeatsText);
      sessionStorage.setItem("showDate", showDate);
      sessionStorage.setItem("showTime", showTime);
      sessionStorage.setItem("groundFloorSeats", groundFloor.join(","));
      sessionStorage.setItem("balconySeats", balcony.join(","));

      axios
        .post("https://movie-app-backend-s5np.onrender.com/booking/book", {
          userId: sessionStorage.getItem("sessionId"),
          movieId:sessionStorage.getItem("movieId"),
          date: sessionStorage.getItem("movieDate"),
          time: sessionStorage.getItem("movieTime"),
          groundFloor: groundFloor.join(","),
          balcony: balcony.join(","),
        })
        .then((response) => {
          alert(
            `${bookedSeatsText} on ${sessionStorage.getItem(
              "movieDate"
            )} - ${sessionStorage.getItem("movieTime")}`
          );
          setSelectedSeats([]); // Clear selected seats after booking
          fetchSeats();
        })
        .catch((error) => {
          console.error("Error booking seats:", error);
        });
    }
  };


  const clearSelection = () => {
    setSelectedSeats([]);
  };

  const generateSeatRows = (rows, location) => {
    return rows.map((row, rowIndex) => (
      <div className="sectionbooking" key={rowIndex}>
        {row.map((seat, seatIndex) => (
          <React.Fragment key={seatIndex}>
            {seat !== "" ? (
              <div
                className={`seat ${
                  selectedSeats.includes(`${location} - ${seat}`)
                    ? "selected"
                    : seats.some((bookedSeat) => {
                        const [bookedLocation, bookedSeats] =
                          bookedSeat.split(" - ");
                        if (bookedLocation !== location) return false;
                        const bookedSeatNames = bookedSeats.split(",");
                        return bookedSeatNames.includes(seat);
                      })
                    ? "booked"
                    : ""
                }`}
                onClick={() =>
                  !seats.some((bookedSeat) =>
                    bookedSeat.startsWith(`${location} - ${seat}`)
                  ) && handleSeatClick(rowIndex, seatIndex, location)
                }
              >
                {seat}
              </div>
            ) : (
              <span className="blank" key={seatIndex}></span>
            )}
          </React.Fragment>
        ))}
      </div>
    ));
  };

  const fetchSeats = () => {
    axios
      .post("https://movie-app-backend-s5np.onrender.com/booking/viewSeats", {
        date: sessionStorage.getItem("movieDate"),
        time: sessionStorage.getItem("movieTime"),
      })
      .then((response) => {
        
        const balconySeats = response.data.data.map(
          (seat) => `Balcony - ${seat.balcony}`
        );
        const groundFloorSeats = response.data.data.map(
          (seat) => `Ground Floor - ${seat.groundFloor}`
        );
        const allSeats = [...balconySeats, ...groundFloorSeats]; // Concatenate both arrays

        setSeats(allSeats);
      })
      .catch((error) => {
        console.error("Error fetching seats:", error);
      });
  };

  useEffect(() => {
    fetchSeats();
  }, []);


  return (
    <div className="bodybooking">
      <style>
        {`
          .booked {
            background-color: #808080; 
            pointer-events: none; 
          }
          .selected {
            background-color: #ffff00; 
          }
          
          .screen-line {
            width: 80%; /* Adjust width as needed */
            height: 4px; /* Adjust height as needed */
            background-color: #FFFFFF; /* Set the color of the line */
            border-radius: 50px 50px 0 0; /* Adjust the border-radius values to control the curve */
          }
        
        `}
      </style>
      <h1 className="h1booking">Please Select Your Seat</h1>
      <h3 className="h3booking" style={{ marginTop: "10px" }}>
        Balcony
      </h3>
      <div className="containerbooking" id="balcony-container">
        {generateSeatRows(balconyRows, "Balcony")}
      </div>
      <h3 className="h3booking" style={{ marginTop: "10px" }}>
        Ground Floor
      </h3>
      <div className="containerbooking" id="ground-floor-container">
        {generateSeatRows(groundFloorRows, "Ground Floor")}
      </div>
      <div
        className="screen-line"
        style={{ textAlign: "center", paddingTop: "10px" ,marginTop:"30px"}}
      >
        <h6>Screen</h6>
      </div>{" "}
      {/* Add this line */}
      <br />
      <button className="button-33" onClick={bookSeats}>
        <span className="text">Book Selected Seats</span>
      </button>
      <br />
      <button className="button-33 clear" onClick={clearSelection}>
        <span className="text">Clear Selection</span>
      </button>
      <br />
    </div>
  );
};

export default TicketBooking;
