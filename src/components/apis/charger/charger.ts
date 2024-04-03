import axios from 'axios';
import { backUrl } from '../../../config/config';

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

// 내 charger 불러오기 API
export async function loadChargerAPI() {
  //console.log(loadChargerAPI);
  return await axios.get('/api/charger').then((response) => response.data);
}
