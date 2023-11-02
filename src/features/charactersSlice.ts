import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NormalizedCharacterType } from '../types/CharacterType';

interface allCharactersType {
  value: NormalizedCharacterType[] | []
}

const initialState: allCharactersType = {
  value: [],
};

const allCharactersSlice = createSlice({
  name: 'allCharacters',
  initialState,
  reducers: {
    addCharacters(state, action: PayloadAction<NormalizedCharacterType[]>) {
      state.value = action.payload;
    }
  }
})

export const { addCharacters } = allCharactersSlice.actions;
export default allCharactersSlice.reducer;
