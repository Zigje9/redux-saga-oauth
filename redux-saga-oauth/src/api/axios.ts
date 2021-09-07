import axios, { AxiosResponse } from 'axios';

export const getAccessToken = (
  code: string,
  stateCode: string,
): Promise<AxiosResponse> => {
  return axios
    .create({
      method: 'post',
      timeout: 10000,
      headers: {
        accept: 'application/json',
      },
      params: {
        code,
        state: stateCode,
        client_id: 'YOUR_CLIENT_ID',
        client_secret: 'YOUR_CLIENT_SECRET',
      },
    })
    .request({ url: '/login/oauth/access_token' });
};
