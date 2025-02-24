import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import createPhotoWithId from '../../utils/createPhotoWithId';

const initialState = {
  photos: [],
  isLoadingViaAPI: false,
};

export const fetchPhoto = createAsyncThunk(
  'photos/fetchPhoto',
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchPhoto.pending, (state) => {
      state.isLoadingViaAPI = true;
    });
    builder.addCase(fetchPhoto.fulfilled, (state, action) => {
      state.isLoadingViaAPI = false;
      state.photos.push(createPhotoWithId(action.payload));
    });
  },
});

export const { addPhoto, resetAllPhotos } = photoSlice.actions;
export const selectPhotos = (state) => state.photo.photos;
export const selectIsLoadingViaAPI = (state) => state.photo.isLoadingViaAPI;

export default photoSlice.reducer;
