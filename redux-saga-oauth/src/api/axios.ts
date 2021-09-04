import axios, { AxiosResponse } from 'axios';

export const getAccessToken = (
  code: string,
  state: string,
): Promise<AxiosResponse> => {
  return axios
    .create({
      method: 'post',
      timeout: 10000,
      headers: { accept: 'application/json' },
      params: {
        code,
        state,
        client_id: 'client-id',
        client_secret: 'client-secret',
      },
    })
    .request({ url: 'https://github.com/login/oauth/access_token' });
};
