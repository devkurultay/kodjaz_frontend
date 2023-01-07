import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

const initialState = {};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      return { message: action.payload };
    },
    clearMessage: () => {
      return { message: '' };
    },
  },
});

export const { setMessage, clearMessage } = messageSlice.actions;
export const messageState = (state: RootState) => state.messageSlice;

export default messageSlice.reducer;
