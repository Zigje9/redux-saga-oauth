import axios, { AxiosResponse } from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getAccessToken = (
  code: string,
  stateCode: string,
  site: string,
): Promise<AxiosResponse> => {
  return axios
    .create({
      method: 'post',
      timeout: 10000,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
    .request({
      url: 'http://localhost:5000/login/authentication',
      data: { code, state: stateCode, site },
    });
};

export const getUserInfo = (accessToken: string): Promise<AxiosResponse> => {
  return axios
    .create({
      method: 'post',
      timeout: 10000,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
    .request({
      url: 'http://localhost:5000/login/user',
      data: { accessToken },
    });
};
