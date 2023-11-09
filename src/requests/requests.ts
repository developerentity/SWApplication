import {getDataByUrl} from '.';
import {ICharacter} from '../interfaces/character';

const baseUrl = 'https://swapi.dev/api/';

export const fetchCharacters = async (
  params?: object,
): Promise<Array<ICharacter>> => getDataByUrl(`${baseUrl}people/`, params);
