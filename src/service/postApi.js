import axios from 'axios';
export const postApi = axios.create({
  baseURL: 'https://spiky-wave-production.up.railway.app/api/post',
});

export const userApi = axios.create({
  baseURL: 'https://spiky-wave-production.up.railway.app/api/user',
});
