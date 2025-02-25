import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
  fullscreen: true,
  image: 'error',
  author: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setImgToModal: (state, action) => {
      console.log(action);
      return {
        ...state,
        show: true,
        image: action.payload.image,
        author: action.payload.author,
      };
    },
    clearModal: (state) => {
      return initialState;
    },
  },
});

export const { setImgToModal, clearModal } = modalSlice.actions;
export const selectModalState = (state) => state.modal;
export default modalSlice.reducer;
