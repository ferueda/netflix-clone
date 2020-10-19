import React from 'react';
import GlobalStyle from './styles/globalStyles';

import { requests } from './requests';

import MovieRow from './components/MovieRow';
import Hero from './components/Hero';

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div>
        <Hero />
        <MovieRow title="Popular on Netflix" request={requests.trendingWeek} />
        <MovieRow title="Trending Now" request={requests.trendingNow} />
        <MovieRow title="Top Rated" request={requests.topRated} />
        <MovieRow isOriginal title="Netflix Originals" request={requests.netflixOriginals} />
        <MovieRow title="Action Movies" request={requests.actionMovies} />
        <MovieRow title="Comedy Movies" request={requests.comedyMovies} />
        <MovieRow title="Romance Movies" request={requests.romanceMovies} />
        <MovieRow title="Horror Movies" request={requests.horrorMovies} />
        <MovieRow title="Documentaries" request={requests.documentaries} />
      </div>
    </React.Fragment>
  );
}

export default App;
