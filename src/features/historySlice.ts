import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HistoryType {
  value: string[]
}

const itemsFromLocalStore = window.localStorage.getItem('history');

const initialState: HistoryType = {
  value: itemsFromLocalStore ? JSON.parse(itemsFromLocalStore) : [],
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addHistoryItem(state, action: PayloadAction<string>) {
      state.value.push(action.payload)
    }
  }
})

export const { addHistoryItem } = historySlice.actions;
export default historySlice.reducer;
