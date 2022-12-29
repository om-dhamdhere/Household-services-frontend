import React from "react";
import ReactDOM from "react-dom";
import Login from "./login";
import Signup from "./signup";
import Cards from "./cards_data";
import Service from "./service_data";
import Booking from "./book_service";
import Payment from "./payment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/service" element={<Cards/>}/>
        <Route exact path="/service_data" element={<Service/>}/>
        <Route exact path="/bookings" element={<Booking/>}/>
        <Route exact path="/payments" element={<Payment/>}/>
      </Routes>
    </Router>
  </>,
  document.getElementById("root")
);
