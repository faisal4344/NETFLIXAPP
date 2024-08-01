

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3', // Base URL for TMDB
});

export default instance;


// utils/axios.js
// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://api.themoviedb.org/3', // Base URL for TMDB
// });

// export default instance;


// import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://api.themoviedb.org/3', // Set the base URL to TMDB API
// });

// export default instance;
