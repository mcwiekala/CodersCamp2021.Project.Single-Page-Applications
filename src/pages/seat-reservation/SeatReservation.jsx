/* eslint-disable no-loop-func */
import React, { createContext, useState } from "react";
import "./seatReservation.scss";
// eslint-disable-next-line import/no-cycle
import Seat from "./Seat/Seat";
import Ticket from "./Ticket/Ticket";
import cinemaHalls from "./data";

const items = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
let taken;
for (let i = 1; i <= cinemaHalls[0].numberOfSeats.columns; i += 1) {
  for (let j = 1; j <= cinemaHalls[0].numberOfSeats.rows; j += 1) {
    taken = false;
    cinemaHalls[0].filmShowing[0].seatsTakes.forEach((el) => {
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
const data = createContext();

function SeatReservation() {
  const [coords, setCoords] = useState();
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { coords, setCoords };

  return (
    <div className="App">
      <div className="movie-seats">
        <h2>Sala {cinemaHalls[0].hallNumber}</h2>
        <data.Provider value={value}>
          <div className="seats">{items}</div>
        </data.Provider>
        {coords ? null : <h2>Wybierz miejsce</h2>}
        {coords && (
          <Ticket
            col={coords.col}
            row={coords.row}
            ticketPrice={cinemaHalls[0].filmShowing[0].ticketPrice}
          />
        )}
      </div>
    </div>
  );
}

export default SeatReservation;
export { data };
