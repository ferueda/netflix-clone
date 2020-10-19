const BASE_URL = 'https://api.themoviedb.org/3';

const AUTH_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDMyNzE4ODE0ZjFhNWQ0MjMzMGZiZDQ0MWY4YTBlNCIsInN1YiI6IjVmOGM0YmJkY2U5ZTkxMDAzNDQ0NDE0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uxhR79_3f6RgxDdcNHbF5qmPXP7ia2YT7PgLA9TdvAw';

export const requests = {
  trendingWeek: `${BASE_URL}/trending/all/week?language=en-US`,
  trendingNow: `${BASE_URL}/trending/all/day?language=en-US`,
  netflixOriginals: `${BASE_URL}/discover/tv?with_networks=213&language=en-US`,
  topRated: `${BASE_URL}/movie/top_rated?language=en-US`,
  actionMovies: `${BASE_URL}/discover/movie?with_genres=28&language=en-US`,
  comedyMovies: `${BASE_URL}/discover/movie?with_genres=35&language=en-US`,
  horrorMovies: `${BASE_URL}/discover/movie?with_genres=27&language=en-US`,
  romanceMovies: `${BASE_URL}/discover/movie?with_genres=10749&language=en-US`,
  documentaries: `${BASE_URL}/discover/movie?with_genres=99&language=en-US`,
};

export async function getMovies(request) {
  const req = await fetch(request, {
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  });
  const data = await req.json();
  return data.results;
}
