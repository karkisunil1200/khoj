import {SEARCH_PICTURE_START, SEARCH_PICTURE_SUCCESS, SEARCH_PICTURE_ERROR} from '../actions';

const initialState = {
  pictures: [],
  fetchingPictures: false,
  error: ''
};

const searchPictureReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SEARCH_PICTURE_START:
      return {
        ...state,
        fetchingPictures: true,
        error: null
      };

    case SEARCH_PICTURE_SUCCESS:
      return {
        ...state,
        fetchingPictures: false,
        pictures: payload
      };
    case SEARCH_PICTURE_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};

export default searchPictureReducer;
