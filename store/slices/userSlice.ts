/* External dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

/* Local dependencies */
import authService from '../../pages/api/api-auth';
import { BackendError, Login, Register, User } from '../../types/userTypes';
import { RootState } from '../';

export const login: any = createAsyncThunk(
  'login',
  async (user: Login, { rejectWithValue }) => {
    try {
      const response = await authService.login(user);

      return response.data;
    } catch (error: any) {
      const {
        response: { data },
      } = error;

      return rejectWithValue(data);
    }
  },
);

export const signUp: any = createAsyncThunk(
  'register',
  async (user: Register, { rejectWithValue }) => {
    try {
      const response = await authService.register(user);

      return { email: user.email };
    } catch (error: any) {
      const {
        response: { data },
      } = error;

      return rejectWithValue(data);
    }
  },
);

export const confirmEmail: any = createAsyncThunk(
  'confirmEmail',
  async (key: string, { rejectWithValue }) => {
    try {
      const response = await authService.confirmEmail(key);

      return response.data;
    } catch (error: any) {
      const {
        response: { data },
      } = error;
      return rejectWithValue(data);
    }
  },
);

interface userSliceState {
  user?: User | any;
  loading: Boolean;
  isLoggedIn: Boolean;
  isSignedUp?: Boolean;
  shouldConfirmationPopupLogin: Boolean;
  shouldConfirmationPopupSignup: Boolean;
  error?: BackendError;
  isEmailConfirmationPopupOpen: Boolean;
  emailConfirmationMsg: string;
}

const initialState: userSliceState = {
  loading: false,
  isLoggedIn: false,
  shouldConfirmationPopupLogin: false,
  shouldConfirmationPopupSignup: false,
  isEmailConfirmationPopupOpen: false,
  emailConfirmationMsg: '',
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

    openConfirmationPopupSignup(state) {
      state.shouldConfirmationPopupSignup = true;
    },

    closeConfirmationPopupSignUp(state) {
      state.shouldConfirmationPopupSignup = false;
    },

    openEmailConfirmationPopup(state) {
      state.isEmailConfirmationPopupOpen = true;
    },

    closeEmailConfirmationPopup(state) {
      state.isEmailConfirmationPopupOpen = false;
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
        state.loading = false;
        state.error = payload;
      })
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.isSignedUp = true;
        state.loading = false;
        state.user = payload;
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.isSignedUp = false;
        state.loading = false;
        state.error = payload;
      })
      .addCase(confirmEmail.pending, (state) => {
        state.loading = true;
      })
      .addCase(confirmEmail.fulfilled, (state, { payload }) => {
        state.emailConfirmationMsg = payload.detail;
        state.loading = false;
      })
      .addCase(confirmEmail.rejected, (state, { payload }) => {
        state.emailConfirmationMsg = payload.detail;
        state.loading = false;
      });
  },
});

export const {
  openConfirmationPopupLogin,
  closeConfirmationPopupLogin,
  openConfirmationPopupSignup,
  closeConfirmationPopupSignUp,
  openEmailConfirmationPopup,
  closeEmailConfirmationPopup,
} = userSlice.actions;
export const userState = (state: RootState) => state.userSlice;

export default userSlice.reducer;
