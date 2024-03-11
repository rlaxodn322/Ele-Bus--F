import axios from 'axios';
import { backUrl } from '../../../config/config';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

// 내 정보 불러오기 API
export async function loadMyInfoAPI() {
  console.log('loadMyInfo');
  return await axios.get('/item').then((response) => response.data);
}

// 등록 API
export function signUpAPI(data: any) {
  console.log('등록', data);
  return axios.post('/item', data).then((response) => response.data);
}

//아이템 삭제
export function deleteItemAPI(number: string) {
  console.log('아이템 삭제', number);
  return axios.delete(`/item/${number}`).then((response) => response.data);
}
