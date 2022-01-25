import React from "react";
import "./style/Movie.scss";

function Movie(props) {
  return (
    <div>
      <img src={props.poster} alt="" />
      <h1 className="user">{props.title}</h1>
      <h2>
        {props.genre} | {props.rated} | {props.runtime}
      </h2>
      <p>{props.plot}</p>
      <div>
        {props.rating} | {props.votes}
      </div>
    </div>
  );
}

export default Movie;
