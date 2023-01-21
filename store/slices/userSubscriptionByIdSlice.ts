/* External dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { $api, getRequest } from '../../pages/api/axois-api';

export const getSubscriptionById: any = createAsyncThunk(
  'subscribtion-by-id',
  async (subscriptionById: any, { rejectWithValue }) => {
    try {
      const response = await getRequest('track/1/');

      console.log(response);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

interface userSubscriptionByIdState {
  lesson?: '';
}

const initialState: userSubscriptionByIdState = {};

const userSubscriptionByIdSlice = createSlice({
  name: '',
  initialState: '',
  reducers: {},
});
