import fetchQuery from 'Api/API';
// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// запит згідно з API
const QUERY_URL = 'trending/movie/week';

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    // Запит на перелік популярних фільмів
    fetchQuery(QUERY_URL)
      .then(({ results }) => {
        if (results.length === 0) {
          return;
        }
        setTopMovies(results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {topMovies.length !== 0 && (
        <ul>
          {topMovies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link
                  to={`movies/${id}`}
                  state={location}
                  style={{ textDecoration: 'none' }}
                >
                  <p>{title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Home;

// Home.propTypes = {
//   topMovies: PropTypes.array,
//   id: PropTypes.number,
//   title: PropTypes.string,
// };
