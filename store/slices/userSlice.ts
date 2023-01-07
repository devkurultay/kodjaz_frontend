/* External dependencies */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

/* Local dependencies */
import authService from '../../api/axois-api';
import { getFromLocalStorage } from '../../components/common/helper';
import { Login } from '../../types/userTypes';
import { RootState } from '../';
import { setMessage } from './messagesSlice';

export const login: any = createAsyncThunk('/', async (user: Login, thunkAPI) => {
  try {
    const data = await authService.login(user);
    return { user: data };
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    thunkAPI.dispatch(setMessage(message));
    return thunkAPI.rejectWithValue('');
  }
});

const user = getFromLocalStorage('user') ? getFromLocalStorage('user') : null;

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user,
    loading: false,
    isLoggedIn: false,
    shouldConfirmationPopup: false,
  },
  reducers: {
    changeHandler(state, action: PayloadAction<Login>) {
      const { email, password } = action.payload;

      Object.assign(state, { email, password });
    },

    openConfirmationPopup(state) {
      state.shouldConfirmationPopup = true;
    },

    closeConfirmationPopup(state) {
      state.shouldConfirmationPopup = false;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { changeHandler, openConfirmationPopup, closeConfirmationPopup } = userSlice.actions;
export const userState = (state: RootState) => state.userSlice;

export default userSlice.reducer;
