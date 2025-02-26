import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setError } from './errorSlice';
import createPhotoWithId from '../../utils/createPhotoWithId';

const initialState = {
  photos: [],
  isLoadingViaAPI: false,
  isLoadingViaLocalHost: false,
};

export const fetchPhoto = createAsyncThunk(
  'photos/fetchPhoto',
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchPhotos = createAsyncThunk(
  'photos/fetchPhotos',
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const photoSlice = createSlice({
  name: 'photo',
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
    builder.addCase(fetchPhoto.rejected, (state) => {
      state.isLoadingViaAPI = false;
    });

    builder.addCase(fetchPhotos.pending, (state) => {
      state.isLoadingViaLocalHost = true;
    });
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.isLoadingViaLocalHost = false;
      if (Array.isArray(action.payload)) {
        action.payload.forEach((element) => {
          state.photos.push(createPhotoWithId(element));
        });
      }
    });
    builder.addCase(fetchPhotos.rejected, (state) => {
      state.isLoadingViaLocalHost = false;
    });
  },
});

export const { addPhoto, resetAllPhotos } = photoSlice.actions;
export const selectPhotos = (state) => state.photo.photos;
export const selectIsLoadingViaAPI = (state) => state.photo.isLoadingViaAPI;
export const selectIsLoadingViaLocalHost = (state) =>
  state.photo.isLoadingViaLocalHost;

export default photoSlice.reducer;
