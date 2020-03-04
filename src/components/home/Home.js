import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../navbar/Navbar';
import SearchBar from '../searchBar/SearchBar';
import SearchList from '../searchList/SearchList';

import '../../styles/home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar />
      <div className='home'>
        <h2 className='home-title'>Welcome to your HomePage</h2>
        <SearchList />
      </div>
    </div>
  );
};

export default Home;
