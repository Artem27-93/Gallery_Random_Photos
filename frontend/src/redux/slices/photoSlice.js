import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  photos: [],
};

const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    addPhoto: (state, action) => {
      return { ...state, photos: [...state.photos, action.payload] };
    },
    resetAllPhotos: (state) => {
      return initialState;
    },
  },
});

export const { addPhoto, resetAllPhotos } = photoSlice.actions;
export const selectPhotos = (state) => state.photo.photos;

export default photoSlice.reducer;
