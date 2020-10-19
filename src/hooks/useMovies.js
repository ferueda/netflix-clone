import React from 'react';
import { getMovies } from '../requests';

function useMovies(request) {
  const [movies, setMovies] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [status, setStatus] = React.useState('idle');

  React.useEffect(() => {
    setStatus('pending');
    setError(null);

    getMovies(request)
      .then((data) => {
        setMovies(data);
        setStatus('resolved');
      })
      .catch((error) => {
        setError(error);
        setStatus('rejected');
      });
  }, [request]);

  return {
    movies,
    status,
    error,
  };
}

export default useMovies;
