// import React, { useEffect, useState } from 'react'; // Import React and necessary hooks
// import './raw.css'; // Import stylesheet for the Row component
// import axios from '../../../utils/axios'; // Import axios for making API requests
// import movieTrailer from 'movie-trailer'; // Import movieTrailer library
// import YouTube from 'react-youtube'; // Import YouTube component

// const Row = ({ title, fetchUrl, isLargeRow }) => { // Define the Row component with props
//   const [movies, setMovies] = useState([]); // Create state variable for movies (plural for consistency)
//   const [trailerUrl, setTrailerUrl] = useState(""); // Create state variable for trailer URL
//   const base_url = "https://image.tmdb.org/t/p/original"; // Base URL for TMDB images

//   // Fetch movies on component mount and update on fetchUrl change
//   useEffect(() => {
//     const fetchData = async () => { // Define an async function to fetch data
//       try {
//         const response = await axios.get(`http://localhost:4000/api/${fetchUrl}`); // Fetch data from the provided URL
//         setMovies(response.data.results); // Update movies state with fetched data
//       } catch (error) {
//         console.error("Error fetching movies:", error); // Log errors
//       }
//     };

//     fetchData(); // Call the fetchData function on component mount
//   }, [fetchUrl]); // Re-run useEffect when fetchUrl changes

//   const handleClick = (movie) => { // Function to handle movie poster click
//     if (trailerUrl) {
//       setTrailerUrl(""); // Clear existing trailer if present
//     } else {
//       movieTrailer(movie?.title || movie?.name || movie?.original_name) // Try different movie titles for trailer search
//         .then((url) => {
//           const newUrlParams = new URLSearchParams(new URL(url).search); // More robust URL parsing
//           const trailerId = newUrlParams.get('v');
//           setTrailerUrl(trailerId); // Update trailerUrl with extracted ID
//         })
//         .catch((error) => console.error("Error fetching trailer:", error)); // Log errors
//     }
//   };

//   const opts = { // Configuration options for YouTube player
//     height: "390",
//     width: "100",
//     playerVars: { autoplay: 1 }, // Use camelCase for consistency
//   };

//   return ( // Render function to define the UI of the Row component
//     <div className="row">
//       <h1>{title}</h1> {/* Display the title prop */}
//       <div className="row_posters">
//         {movies.map((movie, index) => ( // Map through movies and render each poster
//           <img
//             key={index} // Unique key for each movie
//             src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} // Set image source based on isLargeRow prop
//             alt={movie.name} // Set image alt text
//             className={`row_poster ${isLargeRow && "row_posterLarge"}`} // Set className with conditional formatting
//             onClick={() => handleClick(movie)} // Attach click handler
//           />
//         ))}
//       </div>

//       {trailerUrl && ( // Conditionally render YouTube component
//         <div style={{ padding: '40px' }}>
//           <YouTube videoId={trailerUrl} opts={opts} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Row; // Export the Row component for use elsewhere
import React, { useEffect, useState } from 'react'; // Import React and necessary hooks
import './raw.css'; // Import stylesheet for the Row component
import axios from '../../../utils/axios'; // Import axios for making API requests
import movieTrailer from 'movie-trailer'; // Import movieTrailer library
import YouTube from 'react-youtube'; // Import YouTube component

const Row = ({ title, fetchUrl, isLargeRow }) => { // Define the Row component with props
  const [movies, setMovies] = useState([]); // Create state variable for movies (plural for consistency)
  const [trailerUrl, setTrailerUrl] = useState(""); // Create state variable for trailer URL
  const base_url = "https://image.tmdb.org/t/p/original"; // Base URL for TMDB images

  // Fetch movies on component mount and update on fetchUrl change
  useEffect(() => {
    const fetchData = async () => { // Define an async function to fetch data
      try {
        const response = await axios.get(fetchUrl); // Fetch data from the provided URL
        setMovies(response.data.results); // Update movies state with fetched data
      } catch (error) {
        console.error("Error fetching movies:", error); // Log errors
      }
    };

    fetchData(); // Call the fetchData function on component mount
  }, [fetchUrl]); // Re-run useEffect when fetchUrl changes

  const handleClick = (movie) => { // Function to handle movie poster click
    if (trailerUrl) {
      setTrailerUrl(""); // Clear existing trailer if present
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name) // Try different movie titles for trailer search
        .then((url) => {
          const newUrlParams = new URLSearchParams(new URL(url).search); // More robust URL parsing
          const trailerId = newUrlParams.get('v');
          setTrailerUrl(trailerId); // Update trailerUrl with extracted ID
        })
        .catch((error) => console.error("Error fetching trailer:", error)); // Log errors
    }
  };

  const opts = { // Configuration options for YouTube player
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 }, // Use camelCase for consistency
  };

  return ( // Render function to define the UI of the Row component
    <div className="row">
      <h1>{title}</h1> {/* Display the title prop */}
      <div className="row_posters">
        {movies.map((movie, index) => ( // Map through movies and render each poster
          <img
            key={index} // Unique key for each movie
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} // Set image source based on isLargeRow prop
            alt={movie.name} // Set image alt text
            className={`row_poster ${isLargeRow && "row_posterLarge"}`} // Set className with conditional formatting
            onClick={() => handleClick(movie)} // Attach click handler
          />
        ))}
      </div>

      {trailerUrl && ( // Conditionally render YouTube component
        <div style={{ padding: '40px' }}>
          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </div>
  );
};

export default Row; // Export the Row component for use elsewhere


// import React, { useEffect, useState } from 'react';
// import './raw.css';
// import axios from '../../../utils/axios';
// import movieTrailer from 'movie-trailer';
// import YouTube from 'react-youtube';

// const Row = ({ title, fetchUrl, isLargeRow }) => {
//   const [movies, setMovies] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState("");
//   const base_url = "https://image.tmdb.org/t/p/original";

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(fetchUrl);
//         setMovies(response.data.results);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     fetchData();
//   }, [fetchUrl]);

//   const handleClick = (movie) => {
//     if (trailerUrl) {
//       setTrailerUrl("");
//     } else {
//       movieTrailer(movie?.title || movie?.name || movie?.original_name)
//         .then((url) => {
//           const newUrlParams = new URLSearchParams(new URL(url).search);
//           setTrailerUrl(newUrlParams.get('v'));
//         })
//         .catch((error) => console.error("Error fetching trailer:", error));
//     }
//   };

//   const opts = {
//     height: "390",
//     width: "100%",
//     playerVars: {
//       autoplay: 1,
//     },
//   };

//   return (
//     <div className="row">
//       <h1>{title}</h1>
//       <div className="row_posters">
//       {movies && Array.isArray(movies) && movies.map((movie, index) => (
//   <img
//     key={index}
//     src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
//     alt={movie.name}
//     className={`row_poster ${isLargeRow && "row_posterLarge"}`}
//     onClick={() => handleClick(movie)}
//   />
// ))}
//       </div>
//       {trailerUrl && (
//         <div style={{ padding: '40px' }}>
//           <YouTube videoId={trailerUrl} opts={opts} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Row;
