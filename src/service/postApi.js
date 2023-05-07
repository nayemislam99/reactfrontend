import axios from 'axios';
export const postApi = axios.create({
  baseURL: 'https://server.dosbubble.com/api/post',
});

export const userApi = axios.create({
  baseURL: 'https://server.dosbubble.com/api/user',
});
