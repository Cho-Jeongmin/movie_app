import PropTypes from "prop-types";

function Movie({ id, title, year, summary, poster }) {
  return (
    <div>
      <img src={poster} />
      <h3>
        {title}({year})
      </h3>
      <p>{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
