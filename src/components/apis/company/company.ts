import axios from 'axios';
import { backUrl } from '../../../config/config';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

// 내 정보 불러오기 API
export async function loadMyInfoAPI() {
  console.log('loadMyInfoAPI/company');
  return await axios.get('/company').then((response) => response.data);
}
// 내 정보 불러오기 API
export async function loadMyInfoAPI1() {
  console.log('loadMyInfo');
  return await axios.get('/company/1').then((response) => response.data);
}

// 등록 API
export function signUpAPI(data: any) {
  console.log('등록', data);
  return axios.post('/company', data).then((response) => response.data.companies);
}

// 사업자 삭제 API
export function deleteCompanyAPI(companynumber: string) {
  console.log('사업자 삭제', companynumber);
  return axios.delete(`/company/${companynumber}`).then((response) => response.data);
}
