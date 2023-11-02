import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CharactersFilterType } from '../types/CharactersFilterType';

interface CharactersFilter {
  value: CharactersFilterType
}

const initialState: CharactersFilter = {
  value: {
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
  },
};

const CharactersFilterSlice = createSlice({
  name: 'CharactersFilter',
  initialState,
  reducers: {
    setCharactersFilter(state, action: PayloadAction<CharactersFilterType>) {
      state.value = action.payload;
    }
  }
})

export const { setCharactersFilter } = CharactersFilterSlice.actions;
export default CharactersFilterSlice.reducer;
