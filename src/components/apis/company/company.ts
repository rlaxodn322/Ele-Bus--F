import axios from 'axios';
import { backUrl } from '../../../config/config';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

// 내 정보 불러오기 API
export async function loadMyInfoAPI() {
  console.log('loadMyInfo');
  return await axios.get('/').then((response) => response.data);
}

// 등록 API
export function signUpAPI(data: any) {
  console.log('등록', data);
  return axios.post('/company', data).then((response) => response.data);
}

// // 회원 삭제 API
// export function deleteUserAPI(email: string) {
//   console.log('회원 삭제', email);
//   return axios.delete('/user', { data: { email } }).then((response) => response.data);
// }
