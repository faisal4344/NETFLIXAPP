import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './header.css'; // Imports the styles from header.css

const Header = () => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        <div className="header_left">
          <ul>
          {/* <li style={{ color: "red", fontSize: "18px", margin: "10px" }}>Netflix</li>         */}
          <li style={{ color: "red",fontWeight: "bold" }}>Netflix</li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            {/* { Uncomment these lines to add icons (replace with your icons) */} 
             <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li> 
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;


// import React from 'react';
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import './header.css'; // Imports the styles from header.css

// const Header = () => {
//   return (
//     <div className="header_outer_container">
//       <div className="header_container">
//         <div className="header_left">
//           <ul>
//             <li>Netflix</li>
//             <li>Home</li>
//             <li>TV Shows</li>
//             <li>Movies</li>
//             <li>Latest</li>
//             <li>My List</li>
//             <li>Browse by Languages</li>
//           </ul>
//         </div>
//         <div className="header_right">
//           <ul>
//             <li><SearchIcon /></li>
//             <li><NotificationsNoneIcon /></li>
//             <li><AccountBoxIcon /></li>
//             <li><ArrowDropDownIcon /></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
