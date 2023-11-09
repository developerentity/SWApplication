import {
  Action,
  PayloadAction,
  ThunkAction,
  createSlice,
} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {ICharacter} from '../../interfaces/character';
import {fetchCharacters} from '../../requests/requests';
import {setLoading} from './loadingSlice';
import {setRequestError} from './errorSlice';

interface ICharactersInitialState {
  characters: Array<ICharacter>;
}

const initialState: ICharactersInitialState = {
  characters: [],
};

const slice = createSlice({
  name: 'characterSlice',
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<Array<ICharacter>>) {
      state.characters = action.payload;
    },
  },
});

export default slice.reducer;

const {setCharacters} = slice.actions;

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const getCharacterOnPage = (page?: number): AppThunk<void> => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const data = await fetchCharacters({page: page});
      if (!!data && data.length > 0) {
        dispatch(setCharacters(data));
      }
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setRequestError(err));
      dispatch(setLoading(false));
    }
  };
};
