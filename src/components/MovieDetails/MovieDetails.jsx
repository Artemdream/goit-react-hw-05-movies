import fetchQuery from 'Api/API';
import PropTypes from 'prop-types';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  StyledNavLink,
  Section,
  BackLink,
  ItemLink,
  ListLink,
} from './MovieDetails.styled';
import defaultImgMovie from '../../Images/movie.png';
import { useRef } from 'react';

const MovieDetails = () => {
  const [error, setError] = useState(null);
  const [currentMovie, setCurrentMovie] = useState([]);

  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationsRef = useRef(location.state ?? '/movies');

  //* запит згідно з API
  const QUERY_URL = `/movie/${movieId}`;

  useEffect(() => {
    fetchQuery(QUERY_URL)
      .then(res => {
        setCurrentMovie(res);
      })
      .catch(error => setError(error));
  }, [QUERY_URL]);

  const { poster_path, original_title, overview, genres, vote_average } =
    currentMovie;

  return (
    <>
      {Object.keys(currentMovie).length !== 0 && (
        <div>
          <BackLink to={backLinkLocationsRef.current}> Go back</BackLink>
          <Section>
            <div>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : defaultImgMovie
                }
                alt="..."
              ></img>
            </div>
            <div>
              <h1>{original_title}</h1>
              <p>User Score: {vote_average.toFixed(1) * 10 + ' %'}</p>
              <h2>Overview</h2>
              <p>{overview ? overview : 'No review'}</p>
              <h3>Genres</h3>
              <p>
                {genres.length !== 0
                  ? genres.map(genre => genre.name).join(', ')
                  : 'Unknown genres'}
              </p>
            </div>
          </Section>
          <div>
            <p>Additional Information</p>
            <ListLink>
              <ItemLink>
                <StyledNavLink to="cast">Cast</StyledNavLink>
              </ItemLink>
              <ItemLink>
                <StyledNavLink to="reviews">Reviews</StyledNavLink>
              </ItemLink>
            </ListLink>
          </div>
        </div>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  currentMovie: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    genre: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired,
  }),
};