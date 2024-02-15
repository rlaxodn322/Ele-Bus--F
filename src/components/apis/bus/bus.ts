import axios from 'axios';
import { backUrl } from '../../../config/config';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

// 내 정보 불러오기 API
export async function loadMyInfoAPI() {
  console.log('loadMyInfo');
  return await axios.get('/').then((response) => response.data);
}

// // 로그인 API
// export function logInAPI(data: any) {
//   console.log('로그인', data);
//   return axios.post('/user/login', data).then((response) => response.data);
// }

// // 로그아웃 API
// export function logOutAPI() {
//   return axios.post('/user/logout').then((response) => response.data);
// }

// 등록 API
export function signUpAPI(data: any) {
  console.log('등록', data);
  return axios.post('/bus', data).then((response) => response.data);
}

// // 회원 수정 API
// export function updateUserAPI(data: any) {
//   console.log('회원 수정', data);
//   return axios.patch('/user', data).then((response) => response.data);
// }

// // 회원 삭제 API
// export function deleteUserAPI(email: string) {
//   console.log('회원 삭제', email);
//   return axios.delete('/user', { data: { email } }).then((response) => response.data);
// }
