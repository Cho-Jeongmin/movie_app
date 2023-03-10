import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, title, year, summary, poster, genres }) {
  return (
    <Link to="/movie-detail" state={{ title, year, summary, poster, genres }}>
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">
            {title}({year})
          </h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li className="genres__genre" key={index}>
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">
            {summary.length > 200 ? `${summary.slice(0, 200)}...` : summary}
          </p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
