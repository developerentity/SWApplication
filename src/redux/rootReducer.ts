import {combineReducers} from 'redux';
import errorSlice from './slices/errorSlice';
import loadingSlice from './slices/loadingSlice';
import characterSlice from './slices/characterSlice';
import favoriteSlice from './slices/favoriteSlice';

const rootReducer = combineReducers({
  errorSlice,
  loadingSlice,
  characterSlice,
  favoriteSlice,
});

export default rootReducer;
