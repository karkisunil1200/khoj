import {
  FETCH_SINGLE_PICTURE_START,
  FETCH_SINGLE_PICTURE_SUCCESS,
  FETCH_SINGLE_PICTURE_ERROR
} from '../actions';

const initialState = {
  pictures: [],
  fetchingPictures: false,
  error: null,
  url: '',
  user: '',
  firstName: '',
  lastName: ''
};

const getSinglePictureReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_SINGLE_PICTURE_START:
      return {
        ...state,
        fetchingPictures: true,
        error: false
      };

    case FETCH_SINGLE_PICTURE_SUCCESS:
      return {
        ...state,
        fetchingPictures: false,
        pictures: payload,
        url: payload.urls.regular,
        firstName: payload.user.first_name,
        lastName: payload.user.last_name
      };
    case FETCH_SINGLE_PICTURE_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};

export default getSinglePictureReducer;
