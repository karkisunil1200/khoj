import React from 'react';
import {connect} from 'react-redux';

import Navbar from '../navbar/Navbar';
import SearchBar from '../searchBar/SearchBar';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <h2>Welcome to your Home Page</h2>
      <SearchBar />
    </div>
  );
};

const mapStateToProps = ({searchPictureReducer}) => {
  console.log('THis is from Home ', searchPictureReducer);
  return {};
};
export default connect(
  mapStateToProps,
  {}
)(Home);
