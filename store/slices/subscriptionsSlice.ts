/* External dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

/* Local dependencies */
import authService from '../../pages/api/api-auth';
import { Login, Register, User } from '../../types/userTypes';
import { RootState } from '../';
import subscriptionsService from '../../pages/api/api-subscription';

export const getSubscriptions: any = createAsyncThunk(
  'getSubscriptions',
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await subscriptionsService.getSubscriptions(token);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

interface BackendError {
  [key: string]: Array<string>;
}

interface subscriptionsSliceState {
  error?: BackendError;
  loading: Boolean;
  subscriptions: {
    track?: string;
    user?: User | any;
  };
}

const initialState: subscriptionsSliceState = {
  loading: false,
  subscriptions: {},
};

const subscriptionsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // getSubscriptionsRequest(state) {
    //   state.loading = true;
    // },
    // getSubscriptionsSuccess(state) {
    //   state.loading = false;
    //   state.subscriptions = subscriptions;
    // },
    // getSubscriptionsError(state) {
    //   state.error = true;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSubscriptions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSubscriptions.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.subscriptions = payload;
      })
      .addCase(getSubscriptions.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

// export const {} = subscriptionsSlice.actions;
export const subscriptionsState = (state: RootState) =>
  state.subscriptionsSlice;

export default subscriptionsSlice.reducer;
