import unsplash from '../api/unsplash';
import {FETCH_PICTURE_LIST_START, FETCH_PICTURE_LIST_SUCCESS} from '.';

const getPictureList = () => dispatch => {
  dispatch({type: FETCH_PICTURE_LIST_START});
  return unsplash
    .get('/photos')
    .then(res => {
      console.log(res);
      dispatch({type: FETCH_PICTURE_LIST_SUCCESS, payload: res.data});
    })
    .catch(error => {
      console.log(error);
    });
};

export default getPictureList;
