/* External dependencies */
import { createWrapper } from 'next-redux-wrapper';
import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';

/* Local dependencies */
import userSlice from './slices/userSlice';
import messageSlice from './slices/messagesSlice';

const combineReducer = combineReducers({
  userSlice,
  messageSlice,
});

export function makeStore() {
  return configureStore({
    reducer: combineReducer,
    devTools: true,
  });
}

const store = makeStore();

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export const wrapper = createWrapper<RootStore>(makeStore);
