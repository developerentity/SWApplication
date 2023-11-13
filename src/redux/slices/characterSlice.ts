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
  isLastPage: boolean;
}

const initialState: ICharactersInitialState = {
  characters: [],
  isLastPage: false,
};

const slice = createSlice({
  name: 'characterSlice',
  initialState,
  reducers: {
    setCharacters(state, action: PayloadAction<Array<ICharacter>>) {
      state.characters = [...state.characters.concat(action.payload)];
    },
    setIsLastPage(state, action: PayloadAction<boolean>) {
      state.isLastPage = action.payload;
    },
  },
});

export default slice.reducer;

const {setCharacters, setIsLastPage} = slice.actions;

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const getCharacterOnPage = (page = 1): AppThunk<void> => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const data = await fetchCharacters({page: page});
      if (!!data) {
        dispatch(setCharacters(data.results));
        if (data.next === null) {
          dispatch(setIsLastPage(true));
        }
      }
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setRequestError(err));
      dispatch(setLoading(false));
    }
  };
};
