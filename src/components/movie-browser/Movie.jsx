import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style/Movie.scss";

export default function Movie({
  id,
  title,
  genre,
  plot,
  poster,
  rated,
  runtime,
  rating,
  votes,
}) {
  return (
    <div>
      <Link to={`/movie/${id}`}>
        <img src={poster} alt="poster" />
      </Link>
      <h1>{title}</h1>
      <h3>
        {genre} - {rated} - {runtime}
      </h3>
      <p>{plot}</p>
      <p>Rating: {rating}</p>
      <p>Votes: {votes}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  genre: PropTypes.string,
  plot: PropTypes.string,
  poster: PropTypes.string,
  rated: PropTypes.string,
  runtime: PropTypes.string,
  rating: PropTypes.string,
  votes: PropTypes.string,
};

Movie.defaultProps = {
  title: "Movie title",
  genre: "Genre",
  plot: "Movie plot",
  poster: "",
  rated: "Movie Rating",
  runtime: "Movie runtime",
  rating: "Movie score",
  votes: "Votes count",
};
