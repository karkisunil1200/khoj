import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../navbar/Navbar';
import SearchBar from '../searchBar/SearchBar';
import SearchList from '../searchList/SearchList';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <h2>Welcome to your HomePage</h2>
      <SearchBar />
      <SearchList />
    </div>
  );
};

export default Home;
