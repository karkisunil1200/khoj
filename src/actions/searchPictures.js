import unsplash from '../api/unsplash';
import {SEARCH_PICTURE_START, SEARCH_PICTURE_SUCCESS, SEARCH_PICTURE_ERROR} from '.';

const searchPictures = term => dispatch => {
  dispatch({type: SEARCH_PICTURE_START});

  return unsplash
    .get('/search/photos', {params: {query: term}})
    .then(response => {
      console.log('this is the response', response.data);
      dispatch({type: SEARCH_PICTURE_SUCCESS, payload: response.data.results});
    })
    .catch(error => {
      dispatch({type: SEARCH_PICTURE_ERROR, payload: error});
    });
};

export default searchPictures;
