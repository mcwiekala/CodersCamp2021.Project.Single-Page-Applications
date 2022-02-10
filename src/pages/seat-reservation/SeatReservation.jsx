/* eslint-disable no-loop-func */
import React, { createContext, useState, useEffect } from "react";
import "./seatReservation.scss";
import { useParams } from "react-router-dom";
// eslint-disable-next-line import/no-cycle
import Seat from "./seat/Seat";
// import { showings, reservations } from "./data";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import {
  collection,
  getDocs,
  getDoc,
  getAll,
  doc,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
// import { useParams } from "react-router-dom";
import firebase from "../../firebase-config";

let taken;
const hall = {
  cols: 14,
  rows: 9,
};
let takenSeats = [];
let items = Array.from(Array(hall.cols), () => new Array(hall.rows));

const prepareSeats = () => {
  // reservations.forEach((el) => {
  //   showings[showingId].reservationId.forEach((id) => {
  //     if (el.pickupCode === id) {
  //       takenSeats.push(el.seat);
  //     }
  //   });
  // });
  console.log("test");
  console.log(Array.from(Array(hall.cols), () => new Array(hall.rows)));
  items = Array.from(Array(hall.cols), () => new Array(hall.rows));
  for (let col = 1; col <= hall.cols; col += 1) {
    for (let row = 1; row <= hall.rows; row += 1) {
      // console.log(col, " / ", row);
      taken = false;
      items[col - 1][row - 1] = <Seat col={col} row={row} />;
      // takenSeats.forEach((el) => {
      //   if (el.row === j && el.column === i) {
      //     items[i].push(<Seat taken col={i} row={j} />);
      //     taken = true;
      //   }
      // });

      // if (taken === false) {
      //   items[i].push(<Seat col={i} row={j} />);
      // }
    }
  }
  console.log("start");
  // items[2][3] = <Seat taken={true} col={2} row={3} />;
  takenSeats = [];
};
const data = createContext();

function SeatReservation() {
  const { showingId } = useParams();
  const [reservations, setReservations] = useState([]);
  const [showing, setShowing] = useState([]);

  const db = getFirestore(firebase);

  const getShowing = async () => {
    const docRef = doc(db, "showings", showingId);
    const docSnap = await getDoc(docRef);
    // console.log(`t1: ${docSnap.id}`);
    // console.log(docSnap.data());

    setShowing({ ...docSnap.data(), id: docSnap.id });

    const reservationIds = docSnap.data().reservationIds;
    getReservations(reservationIds);
  };

  const getReservations = async (reservationIds) => {
    const reservationsRef = collection(db, "reservations");
    const idsAsStrings = reservationIds.map(function (e) {
      return e.toString();
    });

    const q = query(reservationsRef, where("__name__", "in", idsAsStrings));
    const querySnapshot = await getDocs(q);
    const firebaseReservations = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      firebaseReservations.push({ ...doc.data(), id: doc.id });
    });
    setReservations(firebaseReservations);
    console.log(firebaseReservations);

    console.log(items[2][3].props);

    items[2][3] = <Seat taken={true} col={2} row={3} />;
    items[0][0] = <Seat taken={true} col={2} row={3} />;
    // items[2][3] = <Seat taken={true} col={2} row={3} />;

    console.log(items[2][3].props);
    console.log(data);
    console.log("end");
  };

  const updateTaken = async () => {
    console.log(`sea`);
    reservations.forEach((r) => {
      console.log(`seat taken - c:${r.seat.col} r:${r.seat.row}`);
      // console.log(items);
    });
  };

  const [coords, setCoords] = useState();
  // useEffect(() => {
  //   prepareSeats();
  // }, []);

  useEffect(() => {
    prepareSeats();
    getShowing();
    // updateTaken();
    // items[2][3] = <Seat taken={true} col={2} row={3} />;
  }, []);
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { coords, setCoords };

  return (
    <div className="App">
      <div className="movie-seats">
        <h2>T: {showing.reservationIds}</h2>
        <h2>Film Showing {showingId}</h2>
        <data.Provider value={value}>
          <div className="seats">{items}</div>
        </data.Provider>
        {coords ? null : <h2>Click to book a seat</h2>}
        {coords && (
          <div>
            <button className="reservationButton" type="button">
              Book - column: {coords.col} row: {coords.row}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SeatReservation;
export { data };
