import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import PictureCard from './PictureCard';

import '../../styles/pictureList.css';
import getPictureList from '../../actions/getPictureList';
import Navbar from '../navbar/Navbar';
import SearchBar from '../searchBar/SearchBar';

const PictureList = props => {
  useEffect(() => {
    fetchPictureList();
  }, []);

  const fetchPictureList = () => {
    props.getPictureList();
  };

  return (
    <div className='picture-list-container'>
      <Navbar />
      <h2 className='picture-list-title'>Welcome to your Hub</h2>
      <div className='picture-list'>
        {props.pictures.map(pictures => (
          <PictureCard key={pictures.id} pictures={pictures} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({getPictureListReducer}) => {
  console.log(getPictureListReducer.pictures);
  return {
    pictures: getPictureListReducer.pictures
  };
};

export default connect(
  mapStateToProps,
  {getPictureList}
)(PictureList);
