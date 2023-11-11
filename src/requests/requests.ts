import {getDataByUrl} from '.';
import {ICharacterResponse} from '../interfaces/character';

const baseUrl = 'https://swapi.dev/api/';

export const fetchCharacters = async (
  params?: object,
): Promise<ICharacterResponse> => getDataByUrl(`${baseUrl}people/`, params);
