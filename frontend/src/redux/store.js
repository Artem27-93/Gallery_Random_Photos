import { configureStore } from '@reduxjs/toolkit';
import photoReducer from './slices/photoSlice.js';

const store = configureStore({
  reducer: {
    photo: photoReducer,
  },
});

export default store;
