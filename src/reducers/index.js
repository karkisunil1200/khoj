import {combineReducers} from 'redux';

import getPictureListReducer from './getPictureListReducer';
import getSinglePictureReducer from './getSinglePictureReducer';
import searchPictureReducer from './searchPictureReducer';

export default combineReducers({
  getPictureListReducer,
  getSinglePictureReducer,
  searchPictureReducer
});
