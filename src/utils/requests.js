// const API_KEY = process.env.REACT_APP_API_KEY;
// // 19daa9909ab53e764d71bb72a4edb263
// // const API_KEY = '19daa9909ab53e764d71bb72a4edb263';
// const requests = {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//   fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,                // Corrected typo: fetchActionMovies
//   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,               // Removed duplicate definition
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
//   fetchTvShow: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
// };

// export default requests;

// requests.js

// const API_KEY = process.env.REACT_APP_API_KEY;

// export const fetchTrending = `/trending/all/week?api_key=${API_KEY}&language=en-US`;
// export const fetchNetflixOriginals = `/discover/tv?api_key=${API_KEY}&with_networks=213`;
// export const fetchTopRatedMovies = `/movie/top_rated?api_key=${API_KEY}&language=en-US`;
// export const fetchActionMovies = `/discover/movie?api_key=${API_KEY}&with_genres=28`;
// export const fetchHorrorMovies = `/discover/movie?api_key=${API_KEY}&with_genres=27`;
// export const fetchRomanceMovies = `/discover/movie?api_key=${API_KEY}&with_genres=10749`;
// export const fetchDocumentaries = `/discover/movie?api_key=${API_KEY}&with_genres=99`;
// export const fetchTvShows = `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`;


// requests.js

const API_KEY = process.env.REACT_APP_API_KEY;
// const API_KEY = '19daa9909ab53e764d71bb72a4edb263';

export const fetchTrending = `/trending/all/week?api_key=${API_KEY}&language=en-US`;
export const fetchNetflixOriginals = `/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const fetchTopRatedMovies = `/movie/top_rated?api_key=${API_KEY}&language=en-US`;
export const fetchActionMovies = `/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const fetchComedyMovies = `/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const fetchHorrorMovies = `/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const fetchRomanceMovies = `/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const fetchDocumentaries = `/discover/movie?api_key=${API_KEY}&with_genres=99`;
export const fetchTvShows = `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`;


// const API_KEY = "19daa9909ab53e764d71bb72a4edb263"; // Replace with your actual TMDB API key
// const API_KEY = process.env.REACT_APP_API_KEY;
// const requests = {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   fetchTvShows: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
//   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
// };

// export default requests;
