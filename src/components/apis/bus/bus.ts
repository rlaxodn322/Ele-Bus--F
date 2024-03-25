import axios from 'axios';
import { backUrl } from '../../../config/config';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

// 내 정보 불러오기 API
export async function loadBusListAPI() {
  // console.log('loadBusListAPI');
  return await axios.get('/bus').then((response) => response.data);
}
// 내 정보 불러오기 API
export async function loadBusListAPI1() {
  // console.log('loadBusListAPI');
  return await axios.get('/bus/1').then((response) => response.data);
}

// 등록 API
export function signUpAPI(data: any) {
  // console.log('등록', data);
  return axios.post('/bus', data).then((response) => response.data);
}

export async function loaddata() {
  return await axios.get('/api/data').then((response) => response.data);
}
export async function loadbus() {
  return await axios.get('api/bus').then((response) => response.data);
}
export async function loadstation() {
  return await axios.get('api/stations').then((response) => response.data);
}
// // 회원 삭제 API
// export function deleteUserAPI(email: string) {
//   console.log('회원 삭제', email);
//   return axios.delete('/user', { data: { email } }).then((response) => response.data);
// }
