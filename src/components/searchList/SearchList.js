import React, {useEffect} from 'react';
import {connect} from 'react-redux';

const SearchList = props => {
  return (
    <div className='search-list-container'>
      <div className='search-list'>
        {props.pictures.map(picture => {
          return <img key={picture.id} src={picture.urls.regular} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = ({searchPictureReducer}) => {
  return {
    pictures: searchPictureReducer.pictures
  };
};

export default connect(mapStateToProps)(SearchList);
