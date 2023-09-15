import { combineReducers } from '@reduxjs/toolkit';
import { movieAPI } from './reducers/movieReducer';

export const rootReducer = combineReducers({
  [movieAPI.reducerPath]: movieAPI.reducer,
});
