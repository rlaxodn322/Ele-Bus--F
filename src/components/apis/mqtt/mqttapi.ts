import axios from 'axios';
import { backUrl } from '../../../config/config';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

// 내 정보 불러오기 API
export async function graphget() {
  // console.log('loadMyInfoAPI/company');
  return await axios.get('/mqtt/getdata').then((response) => response.data);
}
