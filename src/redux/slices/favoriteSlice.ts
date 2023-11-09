import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ICharacter} from '../../interfaces/character';

interface IFavoritesInitialState {
  favorites: Array<ICharacter>;
}

const initialState: IFavoritesInitialState = {
  favorites: [],
};

const slice = createSlice({
  name: 'favoriteSlice',
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<ICharacter>) {
      if (
        !state.favorites.some(
          (item: ICharacter) => item.name === action.payload.name,
        )
      ) {
        state.favorites = [...state.favorites.concat(action.payload)];
      }
    },
    removeFromFavorites(state, action: PayloadAction<ICharacter>) {
      if (
        state.favorites.some(
          (item: ICharacter) => item.name === action.payload.name,
        )
      ) {
        state.favorites = [
          ...state.favorites.filter(
            (item: ICharacter) => item.name !== action.payload.name,
          ),
        ];
      }
    },
    resetFavotites(state, action) {
      state.favorites = [];
    },
  },
});

export default slice.reducer;

export const {addToFavorites, removeFromFavorites, resetFavotites} =
  slice.actions;
