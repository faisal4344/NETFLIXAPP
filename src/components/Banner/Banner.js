// import React, { useState, useEffect } from 'react';
// import axios from '../../utils/axios'; // Adjust path as needed
// import requests from '../../utils/requests'; // Adjust path as needed
// import './banner.css'; // Import stylesheet for banner

// const Banner = () => {
//   const [movie, setMovie] = useState({});

//   useEffect(() => {
//     const fetchMovie = async () => {
//       try {
//         const response = await axios.get(requests.fetchNetflixOriginals);
//         setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)]);
//       } catch (error) {
//         console.error("Error fetching movie:", error);
//       }
//     };

//     fetchMovie();
//   }, []);

//   function truncate(str, n) {
//     return str?.length > n ? str.substr(0, n - 1) + '...' : str;
//   }

//   return (
//     <div
//       className="banner"
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat"
//       }}
//     >
//       <div className="banner_contents">
//         <h1 className="banner_title">
//           {movie?.title || movie?.name || movie?.original_name}
//         </h1>
//         <div className="banner_buttons">
//           <button className="banner_button play">Play</button>
//           <button className="banner_button">My List</button>
//         </div>
//         <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
//       </div>
//       <div className="banner_fadeBottom" />
//     </div>
//   );
// };

// export default Banner;

// Banner.js

import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios'; // Adjust path as needed
import { fetchNetflixOriginals } from '../../utils/requests'; // Adjust path as needed
import './banner.css'; // Import stylesheet for banner

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(fetchNetflixOriginals);
        setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)]);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </div>
  );
};

export default Banner;

