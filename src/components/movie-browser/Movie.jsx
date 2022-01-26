import React from "react";
import PropTypes from "prop-types";
import "./style/Movie.scss";

function Movie({ title, genre, plot, poster, rated, runtime, rating, votes }) {
  return (
    <div className="movie-wrapper">
      <div className="poster">
        <img src={poster} alt="" />
      </div>
      <div className="movie-details">
        <h1>{title}</h1>
        <h4>
          {genre} | {rated} | {runtime}
        </h4>
        <p>{plot}</p>
      </div>
      <div className="movie-ratings">
        <div className="rating">{rating}</div>
        <h4>Average rating</h4>
        <div className="votes">{votes}</div>
        <h4>Votes</h4>
      </div>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  plot: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rated: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  votes: PropTypes.string.isRequired,
};

export default Movie;
