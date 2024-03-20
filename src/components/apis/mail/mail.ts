import axios from 'axios';
import { backUrl } from '../../../config/config';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

// 등록 API
export function signUpAPI(data: any) {
  console.log('등록', data);
  return axios.post('/mail', data).then((response) => response.data);
}
