/* External dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

/* Local dependencies */
import authService from '../../pages/api/api-auth';
import { getTokens } from '../../pages/api/axois-api';
import { Login, Register, User } from '../../types/userTypes';
import { RootState } from '../';

export const login: any = createAsyncThunk(
  'login',
  async (user: Login, { rejectWithValue }) => {
    try {
      const response = await authService.login(user);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

export const signIn: any = createAsyncThunk(
  'register',
  async (user: Register, { rejectWithValue }) => {
    try {
      const response = await authService.register(user);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

interface userSliceState {
  user?: User | any;
  loading: Boolean;
  isLoggedIn: Boolean;
  isSignIn?: Boolean;
  shouldConfirmationPopupLogin: Boolean;
  shouldConfirmationPopupSignin: Boolean;
  error?: Error;
}

const initialState: userSliceState = {
  loading: false,
  isLoggedIn: false,
  shouldConfirmationPopupLogin: false,
  shouldConfirmationPopupSignin: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    openConfirmationPopupLogin(state) {
      state.shouldConfirmationPopupLogin = true;
    },

    closeConfirmationPopupLogin(state) {
      state.shouldConfirmationPopupLogin = false;
    },

    openConfirmationPopupSignin(state) {
      state.shouldConfirmationPopupSignin = true;
    },

    closeConfirmationPopupSignin(state) {
      state.shouldConfirmationPopupSignin = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        const accessToken = payload.access;
        const decoded: User = jwtDecode(accessToken);
        const user: User = {
          email: decoded?.email,
          name: decoded?.name,
          user_id: decoded?.user_id,
          username: decoded?.username,
        };

        state.isLoggedIn = true;
        state.user = user;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.error = payload.message;
      })
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.isSignIn = true;
        state.user = payload;
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.isSignIn = false;
        state.error = payload;
      });
  },
});

export const {
  openConfirmationPopupLogin,
  closeConfirmationPopupLogin,
  openConfirmationPopupSignin,
  closeConfirmationPopupSignin,
} = userSlice.actions;
export const userState = (state: RootState) => state.userSlice;

export default userSlice.reducer;
