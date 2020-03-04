import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import getSinglePicture from '../../actions/getSinglePicture';
import '../../styles/pictureDetail.css';
import Navbar from '../navbar/Navbar';

const PictureDetail = props => {
  const id = props.match.params.id;
  useEffect(() => {
    props.getSinglePicture(id);
  }, []);

  let testImg = props.picture;
  console.log('test', testImg);

  return (
    <div className='picture__details__container'>
      <Navbar />
      <h1 className='picture__details__title'>Welcome to the Photos Details page</h1>

      <div className='picture__details'>
        <div className='picture__details__image'>
          <img src={props.url} />
          <div className='picture__details__image__title'>
            <h3 className='picture__details__author'>
              Author: {props.firstName} {props.lastName}{' '}
            </h3>
          </div>
        </div>
        <div className='pictures__details__description'>
          <h2 className='titles'>Description</h2>
          <div className='pictures__details__description__content'>
            <h3 className='description'>{props.picture.alt_description}</h3>
            <h4 className='views'>Total views: {props.picture.views}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({getSinglePictureReducer}) => {
  console.log('this is coming from pic detail mapstateto', getSinglePictureReducer.url);
  return {
    picture: getSinglePictureReducer.pictures,
    url: getSinglePictureReducer.url,
    firstName: getSinglePictureReducer.firstName,
    lastName: getSinglePictureReducer.lastName
  };
};
export default connect(
  mapStateToProps,
  {getSinglePicture}
)(PictureDetail);
