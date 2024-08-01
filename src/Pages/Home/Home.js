import React from 'react';
import Header from '../../components/Header/Header'; // Adjust path as necessary
import Banner from '../../components/Banner/Banner'; // Adjust path as necessary
import Rowlist from '../../components/Rows/RowList/Rowlist'; // Adjust path as necessary
import Footer from '../../components/Footer/Footer'; // Adjust path as necessary

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Rowlist />
      <Footer />
    </div>
  );
};

export default Home;
