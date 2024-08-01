// // Import the Row component (assuming it's defined elsewhere)
// import Row from '../Row/Row'; // Replace with the actual path to your Row component


// // Import your request functions (assuming they're defined elsewhere)
// import {
//   fetchTrending,
//   fetchTopRatedMovies,
//   fetchActionMovies,
//   fetchComedyMovies,
//   fetchHorrorMovies,
//   fetchRomanceMovies,
//   fetchTvShows,
//   fetchDocumentaries,
//   fetchNetflixOriginals, // Add Netflix Originals function if needed
// } from '../../../utils/requests.js'; // Replace with the actual path to your requests

// const RowList = () => {
//   return (
//     <div> {/* Wrap the Row components in a container */}
//       <Row title="Trending Now" fetchUrl={fetchTrending} />
//       <Row title="Top Rated" fetchUrl={fetchTopRatedMovies} />
//       <Row title="Action Movies" fetchUrl={fetchActionMovies} />
//       <Row title="Comedy Movies" fetchUrl={fetchComedyMovies} />
//       <Row title="Horror Movies" fetchUrl={fetchHorrorMovies} />
//       <Row title="Romance Movies" fetchUrl={fetchRomanceMovies} />
//       <Row title="TV Shows" fetchUrl={fetchTvShows} />
//       <Row title="Documentaries" fetchUrl={fetchDocumentaries} />
//       {/* Optionally include a row for Netflix Originals if needed */}
//       <Row title="Netflix Originals" fetchUrl={fetchNetflixOriginals} />
//     </div>
//   );
// };

// export default RowList;


// Rowlist.js

// import Row from '../Row/Row'; // Ensure the path is correct

// import {
//   fetchTrending,
//   fetchTopRatedMovies,
//   fetchActionMovies,
//   fetchComedyMovies,
//   fetchHorrorMovies,
//   fetchRomanceMovies,
//   fetchTvShows,
//   fetchDocumentaries,
//   fetchNetflixOriginals,
// } from '../../../utils/requests'; // Ensure the path is correct

// const RowList = () => {
//   return (
//     <div>
//       <Row title="Trending Now" fetchUrl={fetchTrending} />
//       <Row title="Top Rated" fetchUrl={fetchTopRatedMovies} />
//       <Row title="Action Movies" fetchUrl={fetchActionMovies} />
//       <Row title="Comedy Movies" fetchUrl={fetchComedyMovies} />
//       <Row title="Horror Movies" fetchUrl={fetchHorrorMovies} />
//       <Row title="Romance Movies" fetchUrl={fetchRomanceMovies} />
//       <Row title="TV Shows" fetchUrl={fetchTvShows} />
//       <Row title="Documentaries" fetchUrl={fetchDocumentaries} />
//       <Row title="Netflix Originals" fetchUrl={fetchNetflixOriginals} />
//     </div>
//   );
// };

// export default RowList;

// RowList.js

import React from 'react';
import Row from '../Row/Row'; // Adjust path if needed

import {
  fetchTrending,
  fetchTopRatedMovies,
  fetchActionMovies,
  fetchComedyMovies,
  fetchHorrorMovies,
  fetchRomanceMovies,
  fetchTvShows,
  fetchDocumentaries,
  fetchNetflixOriginals,
} from '../../../utils/requests'; 

const RowList = () => {
  return (
    <div>
      <Row title="Trending Now" fetchUrl={fetchTrending} />
      <Row title="Top Rated" fetchUrl={fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={fetchRomanceMovies} />
      <Row title="TV Shows" fetchUrl={fetchTvShows} />
      <Row title="Documentaries" fetchUrl={fetchDocumentaries} />
      <Row title="Netflix Originals" fetchUrl={fetchNetflixOriginals} />
    </div>
  );
};

export default RowList;
