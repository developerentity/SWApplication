import axios from 'axios';
import store from '../redux/store';
import {setRequestError} from '../redux/slices/errorSlice';

export const getDataByUrl = async (url: string, params?: object) => {
  try {
    const reqParams = params ? {params} : {};
    const response = await axios.get(url, reqParams);
    return response.data;
  } catch (error) {
    const {dispatch} = store;
    console.error(error);
    return dispatch(setRequestError(error));
  }
};
