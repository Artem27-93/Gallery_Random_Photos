import { configureStore } from '@reduxjs/toolkit';
import photoReducer from './slices/photoSlice.js';
import errorReducer from './slices/errorSlice.js';

const store = configureStore({
  reducer: {
    photo: photoReducer,
    error: errorReducer,
  },
});

export default store;
