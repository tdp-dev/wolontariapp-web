import axios, { AxiosInstance, HeadersDefaults } from 'axios';
import UserModel, { UserType } from '@models/User';

const API: AxiosInstance = axios.create({
  baseURL: 'https://wolontariapp.lemonsky-4543d7e0.northeurope.azurecontainerapps.io/',
  validateStatus: (status) => status < 500,
});

export const setJwtToken = (newToken: string) => {
  API.defaults.headers['Authorization'] = `Bearer ${newToken}`;
};

export const refreshTokenHandler = async (refreshToken: string): Promise<void> => {
  const { data } = await API.post('/auth/refresh/login', {
    key: refreshToken,
  });
  setJwtToken(data.access_token);
};

export default API;
