import fetchQuery from 'Api/API';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//* Інформація огляди (Рендериться на сторінці MovieDetails)

const Reviews = () => {
  const [error, setError] = useState(null);
  const [movieReviews, setMovieReviews] = useState([]);

  const { movieId } = useParams();

  //* запит згідно з API
  const QUERY_URL = `/movie/${movieId}/reviews`;

  useEffect(() => {
    fetchQuery(QUERY_URL)
      .then(res => {
        setMovieReviews(res.results);
      })
      .catch(error => setError(error));
  }, [QUERY_URL]);

  return (
    <div>
      {movieReviews.length === 0 ? (
        'We don`t have any reviews for this movie'
      ) : (
        <ul>
          {movieReviews.map(({ author, content, id }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  movieReviews: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
