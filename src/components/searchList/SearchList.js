import React, {useEffect} from 'react';
import {connect} from 'react-redux';

const SearchList = props => {
  //   useEffect(() => {
  //     results();
  //   }, []);

  //   const results = () => {
  //     props.pictures.map(picture => {
  //       return <img src={picture.urls.small} />;
  //     });
  //   };

  return (
    <div className='searchList'>
      <h2>This is the searchlist result</h2>
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
