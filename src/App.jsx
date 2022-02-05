import React from "react";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import SeatReservation from "./pages/seat-reservation/SeatReservation";


export default function App() {
  return (
    <div className="App">
      <Navbar />
      <SeatReservation />
    </div>
  );
}
