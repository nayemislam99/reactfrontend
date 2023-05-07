import axios from 'axios';
export const postApi = axios.create({
  baseURL: 'https://spiky-wave-production.up.railway.app',
});

export const userApi = axios.create({
  baseURL: 'https://spiky-wave-production.up.railway.app',
});
