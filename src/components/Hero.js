import React from 'react';
import styled from 'styled-components';

import { requests } from '../requests';
import useMovies from '../hooks/useMovies';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const Header = styled.header`
  background-size: cover;
  background-image: ${({ image }) => `url(${IMAGE_BASE_URL}/${image})`};
  background-position: center center;

  object-fit: contain;
  height: 448px;
  color: white;
`;

const ContentContainer = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
`;

const StarredMovieTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;

const ButtonContainer = styled.div``;

const Description = styled.h2`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  max-width: 360px;
  height: 80px;
`;

function Hero() {
  const { movies, status, error } = useMovies(requests.netflixOriginals);

  const starredMovie = React.useMemo(() => movies[Math.floor(Math.random() * movies.length)], [
    movies,
  ]);

  console.log(starredMovie);
  return (
    <Header image={starredMovie?.backdrop_path}>
      <ContentContainer>
        <StarredMovieTitle>
          {starredMovie?.title || starredMovie?.name || starredMovie?.original_name}
        </StarredMovieTitle>

        <ButtonContainer>
          <button>Play</button>
          <button>My List</button>
        </ButtonContainer>

        <Description>{starredMovie?.overview}</Description>
      </ContentContainer>
    </Header>
  );
}

export default Hero;
