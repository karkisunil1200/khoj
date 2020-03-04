import React from 'react';
import {Link} from 'react-router-dom';

import '../../styles/pictureCard.css';

const PictureCard = props => {
  // console.log('This is from PictureCard', props);
  const {pictures} = props;
  return (
    <div className='picture-card'>
      <Link to={`/pictures/${pictures.id}`}>
        <img src={pictures.urls.regular} />
      </Link>
      <h4>Likes: {pictures.likes} </h4>
    </div>
  );
};

export default PictureCard;
