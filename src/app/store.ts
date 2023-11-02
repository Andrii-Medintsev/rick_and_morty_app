import { configureStore } from '@reduxjs/toolkit';
import historyReducer from '../features/historySlice'
import charactersReducer from '../features/charactersSlice';
import charactersFilterReducer from '../features/charactersFilterSlice';

export const store = configureStore({
  reducer: {
    history: historyReducer,
    characters: charactersReducer,
    charactersFilter: charactersFilterReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>