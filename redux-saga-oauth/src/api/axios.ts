import axios, { AxiosResponse } from 'axios';

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
        accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      data: {
        code,
        state: stateCode,
        site,
      },
    })
    .request({ url: 'http://localhost:5000/login/accesstoken' });
};
