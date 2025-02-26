import { configureStore } from '@reduxjs/toolkit';
import photoReducer from './slices/photoSlice.js';
import errorReducer from './slices/errorSlice.js';
import modalReducer from './slices/modalSlice.js';
import filterReducer from './slices/filterSlice.js';

const store = configureStore({
  reducer: {
    photo: photoReducer,
    error: errorReducer,
    modal: modalReducer,
    filter: filterReducer,
  },
});

export default store;
