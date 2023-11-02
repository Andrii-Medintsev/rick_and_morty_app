import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CharacterType } from '../types/CharacterType';

interface allCharactersType {
  value: CharacterType[]
}

const initialState: allCharactersType = {
  value: [],
};

const allCharactersSlice = createSlice({
  name: 'allCharacters',
  initialState,
  reducers: {
    addCharacters(state, action: PayloadAction<CharacterType[]>) {
      state.value = action.payload;
    }
  }
})

export const { addCharacters } = allCharactersSlice.actions;
export default allCharactersSlice.reducer;
