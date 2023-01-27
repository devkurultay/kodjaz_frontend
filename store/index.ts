/* External dependencies */
import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';

/* Local dependencies */
import trackSlice from './slices/trackSlice';
import userSlice from './slices/userSlice';
import subscriptionsSlice from './slices/subscriptionsSlice';

const combineReducer = combineReducers({
  userSlice,
  subscriptionsSlice,
  trackSlice,
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
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
