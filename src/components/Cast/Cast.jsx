import fetchQuery from 'Api/API';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ListCast, ItemCast, ItemCastText, ImgCast } from './Cast.styled';
import defaultImg from '../../Images/default-avatar.png';

//* Інформація про акторський склад (Рендериться на сторінці MovieDetails)

const Cast = () => {
  const [error, setError] = useState(null);
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  //* запит згідно з API
  const QUERY_URL = `/movie/${movieId}/credits`;

  useEffect(() => {
    fetchQuery(QUERY_URL)
      .then(res => {
        setCast(res.cast);
      })
      .catch(error => setError(error));
  }, [QUERY_URL]);

  return (
    <>
      {cast.length === 0 ? (
        'No cast information available'
      ) : (
        <ListCast>
          {cast.map(({ original_name, profile_path, character, id }) => (
            <ItemCast key={id}>
              <ImgCast
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : defaultImg
                }
                alt={original_name}
              />
              <ItemCastText>
                <strong>{original_name}</strong>
              </ItemCastText>
              <ItemCastText>Role: {character} </ItemCastText>
            </ItemCast>
          ))}
        </ListCast>
      )}
    </>
  );
};

export default Cast;

Cast.propTypes = {
  cast: PropTypes.shape({
    original_name: PropTypes.string.isRequired,
    profile_path: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
