import React from "react";
import "./style/Movie.scss";

function Movie(props) {
  return (
    <div className="movie-wrapper">
      <div className="poster">
        <img src={props.poster} alt="" />
      </div>
      <div className="movie-details">
        <h1>{props.title}</h1>
        <h4>
          {props.genre} | {props.rated} | {props.runtime}
        </h4>
        <p>{props.plot}</p>
      </div>
      <div className="movie-ratings">
        <div className="rating">{props.rating}</div>
        <h4>Average rating</h4>
        <div className="votes">{props.votes}</div>
        <h4>Votes</h4>
      </div>
    </div>
  );
}

export default Movie;
