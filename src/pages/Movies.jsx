import fetchQuery from 'Api/API';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { InputSearch } from './Movies.styled';

//* запит згідно з API
const QUERY_URL = 'search/movie';

const Movies = () => {
  const [error, setError] = useState(null);
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({});

  const movieName = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    fetchQuery(QUERY_URL, searchParams)
      .then(res => {
        setSearchMovies(res.results);
      })
      .catch(error => setError(error));
  }, [searchParams]);

  const updateSearchParams = ({ target: { value } }) => {
    const searchOpt = value === '' ? {} : { query: value };
    setSearchParams(searchOpt);
  };

  return (
    <div>
      <InputSearch
        type="text"
        onChange={updateSearchParams}
        value={movieName}
        placeholder="Search movies"
      />

      {searchMovies.length !== 0 && (
        <div>
          <ul>
            {searchMovies.map(({ id, title }) => (
              <li>
                <Link key={id} to={`${id}`} state={location}>
                  <p>{title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Movies;

Movies.propTypes = {
  searchMovies: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
