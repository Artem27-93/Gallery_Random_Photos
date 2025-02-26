import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  onlyFavourite: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    onlyFavouriteFilter: (state, action) => {
      state.onlyFavourite = !state.onlyFavourite;
    },
  },
});

export const { onlyFavouriteFilter } = filterSlice.actions;
export const selectOnlyFavouriteFilter = (state) => state.filter.onlyFavourite;
export default filterSlice.reducer;
