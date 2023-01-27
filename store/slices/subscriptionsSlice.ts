/* External dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/* Local dependencies */
import { BackendError } from '../../types/userTypes';
import { RootState } from '../';
import subscriptionsService from '../../pages/api/api-subscription';
import { SubscriptionType } from '../../types/subscriptionsTypes';

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

interface subscriptionsSliceState {
  error?: BackendError;
  loading: Boolean;
  subscriptions: SubscriptionType[];
}

const initialState: subscriptionsSliceState = {
  loading: false,
  subscriptions: [],
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
