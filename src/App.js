import React from "react";
import "./App.css";
import Card2 from './components/Card2';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes, Switch  } from 'react-router-dom/dist/umd/react-router-dom.development';
import SigninSignUp from './components/SigninSignUp';
import AdimAdd from './components/AdimAdd';
import DeleteMovie from './components/DeleteMovie';
import ViewBookings from './components/ViewBookings';
import Intro from './components/Intro';
import SingleMovie from './components/SingleMovie';
import AcceptUser from "./components/AcceptUser";
import MovieGenres from "./components/Moviegenres";
import Aboutus from "./components/Aboutus";
import TicketBooking from "./components/TicketBooking";
import UserProfile from "./components/UserProfile";
import ViewmyBookings from "./components/ViewmyBookings";



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Intro />
                <Card2 />
                <MovieGenres />
                <Aboutus />
              </>
            }
          />
          <Route path="/signin" element={<SigninSignUp />} />
          <Route path="/moviebooking" element={<AdimAdd />} />
          <Route path="/deletemovie" element={<DeleteMovie />} />
          <Route path="/viewbooking" element={<ViewBookings />} />
          <Route path="/acceptuser" element={<AcceptUser />} />
          <Route path="/smovie" element={<SingleMovie />} />
          <Route path="/ticketbooking" element={<TicketBooking />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/viewmytickets" element={<ViewmyBookings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
