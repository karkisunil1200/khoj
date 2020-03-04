import {
  FETCH_SINGLE_PICTURE_ERROR,
  FETCH_SINGLE_PICTURE_START,
  FETCH_SINGLE_PICTURE_SUCCESS
} from '.';
import unsplash from '../api/unsplash';

const getSinglePicture = id => dispatch => {
  console.log('This is the id', id);
  dispatch({type: FETCH_SINGLE_PICTURE_START});

  return unsplash
    .get(`/photos/${id}`)
    .then(response => {
      // console.log('getsignlepicute', response.data.urls.raw);
      dispatch({type: FETCH_SINGLE_PICTURE_SUCCESS, payload: response.data});
    })
    .catch(error => {
      console.log(error);
      dispatch({type: FETCH_SINGLE_PICTURE_ERROR, payload: error});
    });
};

export default getSinglePicture;
