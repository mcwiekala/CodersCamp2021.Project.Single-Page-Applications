/* eslint-disable no-loop-func */
import React, { createContext, useState, useEffect } from "react";
import "./seatReservation.scss"
import { useParams } from "react-router-dom";
// eslint-disable-next-line import/no-cycle
import Seat from "./seat/Seat"
import { showings, reservations } from "./data"

let taken;
const hall = {
  cols: 14,
  rows: 9
}
let takenSeats = []
let items = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], []]

const prepareSeats = (showingId) => {
  reservations.forEach(el => {
    showings[showingId].reservationId.forEach(id => {
      if (el.pickupCode === id) {
        takenSeats.push(el.seat)
      }
    })
  })
  items = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
  for (let i=1; i<=hall.cols; i+=1) {
    for (let j=1; j<=hall.rows; j+=1) {
      taken = false;
      takenSeats.forEach(el => {
        if (el.row === j && el.column === i) {
          items[i].push(<Seat taken col={i} row={j} />);
          taken = true;
        }
      });
  
      if (taken === false) {
        items[i].push(<Seat col={i} row={j} />);
      }
    }
  }
  takenSeats = []
}
const data = createContext()


function SeatReservation() {
  const { showingId } = useParams()
  const [coords, setCoords] = useState();
    useEffect(() => {
      prepareSeats(showingId)
    }, [showingId])
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { coords, setCoords };

  return (
    <div className="App">
      <div className="movie-seats">
        <h2>Seans {showingId}</h2>
        <data.Provider value={value}>
          <div className="seats">{items}</div>
        </data.Provider>
        { coords ? null : <h2>Wybierz miejsce</h2>}
        { coords && <div>
          <button className="reservationButton" type="button">Zarezerwuj</button>
        </div> }
      </div>
    </div>
  );
}

export default SeatReservation;
export { data };
