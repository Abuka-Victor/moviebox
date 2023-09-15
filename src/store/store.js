import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { movieAPI } from './reducers/movieReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieAPI.middleware),
});
