import React from 'react';
import styled from 'styled-components';

import useMovies from '../hooks/useMovies';

const RowContainer = styled.section`
  margin-left: 20px;
`;

const Row = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;

  padding: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Poster = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: ${({ isOriginal }) => (isOriginal ? '250px' : '140px')};
  transition: transform 450ms;
  padding: 0 2px;

  &:hover {
    transform: ${({ isOriginal }) => (isOriginal ? 'scale(1.10)' : 'scale(1.08)')};
  }
`;

const RowTitle = styled.h2`
  margin-left: 10px;
`;

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function MovieRow({ title, request, isOriginal }) {
  const { movies, status, error } = useMovies(request);

  return (
    <RowContainer>
      <RowTitle>{title}</RowTitle>
      <Row>
        {movies.map((movie) => (
          <Poster
            isOriginal={isOriginal}
            key={movie.id}
            src={`${IMAGE_BASE_URL}/${isOriginal ? movie.poster_path : movie.backdrop_path}`}
            alt={`${movie.name || movie.title} poster`}
          />
        ))}
      </Row>
    </RowContainer>
  );
}

export default MovieRow;
