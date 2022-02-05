import React, { useContext } from "react";
// eslint-disable-next-line import/no-cycle
import { data } from "../SeatReservation"

// eslint-disable-next-line react/prop-types
function Seat({ taken = false, row = 0, col = 0 }) {
  const {coords, setCoords} = useContext(data);
  let chosen;
  if (coords && coords.row === row && coords.col === col) {
    chosen = true;
  } else {
    chosen = false;
  }

  return (
    <button
      type="button"
      onClick={() => {
         if (taken === false) {
            setCoords({ col, row })
         } 
      }}
      className="seat"
      style={{ backgroundColor: `${taken ? "#444" : `${chosen ? "orange" : "green"}`}` }}
    >
      {row}, {col}
    </button>
  );
}

export default Seat;
