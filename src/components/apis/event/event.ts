import axios from 'axios';
import { backUrl } from '../../../config/config';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

// 내 정보 불러오기 API
export async function loadMyInfoAPI() {
  console.log('loadMyInfoAPI/event');
  return await axios.get('/event').then((response) => response.data);
}

// 등록 API
export function signUpAPI(data: any) {
  console.log('등록', data);
  return axios.post('/event', data).then((response) => response.data);
}
// eslint-disable-next-line no-undef
export function deleteEventAPI(companynumber: string) {
  console.log('이벤트 삭제', companynumber);
  return axios.delete(`/event/${companynumber}`).then((response) => response.data.companynumber);
}
// // 회원 삭제 API
// export function deleteUserAPI(email: string) {
//   console.log('회원 삭제', email);
//   return axios.delete('/user', { data: { email } }).then((response) => response.data);
// }
