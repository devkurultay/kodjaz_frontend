/* External dependencies */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { getRequest } from '../../pages/api/axois-api';
import { Track, TrackById, TrackByName } from '../../types/tracksTypes';

type TokenAndTrackId = {
  token: string;
  trackId: number;
};

export const getTracks: any = createAsyncThunk(
  'getSubscriptions',
  async (token: string, { rejectWithValue }) => {
    try {
      const subscriptions = await getRequest(token, 'v1/user/subscriptions');

      return await Promise.all(
        subscriptions.map(
          // TODO(murat): put proper type
          async ({ track }: any) =>
            await getRequest(token, `v1/user/tracks/${track}/`),
        ),
      );
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

export const getTrackById: any = createAsyncThunk(
  'track-by-id',
  async ({ token, trackId }: TokenAndTrackId, { rejectWithValue }) => {
    try {
      const response = await getRequest(token, `/v1/user/tracks/${trackId}/`);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  },
);

interface userTrackState {
  error?: Error;
  loading: boolean;
  track?: '';
  tracksById: TrackById;
  tracksByName: TrackByName;
}

const initialState: userTrackState = {
  loading: false,
  tracksById: {},
  tracksByName: {},
};

const userTrackSlice = createSlice({
  name: 'track-by-id',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrackById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTrackById.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.track = payload;
      })
      .addCase(getTrackById.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getTracks.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(getTracks.fulfilled, (state, { payload }) => {
        const tracksById: TrackById = {};
        const tracksByName: TrackByName = {};
        payload.forEach((track: Track) => {
          tracksById[track.id] = track;
          tracksByName[track.name] = track;
        });
        state.loading = false;
        state.tracksById = tracksById;
        state.tracksByName = tracksByName;
      })
      .addCase(getTracks.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const trackState = (state: RootState) => state.trackSlice;

export default userTrackSlice.reducer;
