import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CharactersFilterType } from '../types/CharactersFilterType';

interface HistoryType {
  value: (string | CharactersFilterType)[]
}

const itemsFromLocalStore = window.localStorage.getItem('history');

const initialState: HistoryType = {
  value: itemsFromLocalStore ? JSON.parse(itemsFromLocalStore) : [],
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addHistoryItem(state, action: PayloadAction<string | CharactersFilterType>) {
      state.value.push(action.payload)
    }
  }
})

export const { addHistoryItem } = historySlice.actions;
export default historySlice.reducer;
