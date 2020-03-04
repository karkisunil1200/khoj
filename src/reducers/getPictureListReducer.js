import {FETCH_PICTURE_LIST_START, FETCH_PICTURE_LIST_SUCCESS} from '../actions';

const initialState = {
  pictures: [],
  fetchingPictures: false,
  error: ''
};

const getPictureListReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_PICTURE_LIST_START:
      return {
        ...state,
        fetchingPictures: true,
        error: null
      };

    case FETCH_PICTURE_LIST_SUCCESS:
      return {
        ...state,
        fetchingPictures: false,
        pictures: payload
      };
    default:
      return state;
  }
};

export default getPictureListReducer;
