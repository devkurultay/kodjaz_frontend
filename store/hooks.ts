/* External dependencies */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

/* Local dependencies */
import type { AppDispatch, RootState } from './';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
