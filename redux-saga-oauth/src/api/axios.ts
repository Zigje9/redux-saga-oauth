import axios, { AxiosInstance } from 'axios';

const setHeader = () => {
  axios.defaults.headers['Content-Type'] = 'application/json';
};

export const getAxios = (
  reqUrl: string,
  reqParams: {},
): Promise<AxiosInstance> => {
  setHeader();
  return axios
    .create({
      method: 'get',
      timeout: 10000,
      params: { ...reqParams },
    })
    .request({ url: reqUrl });
};

export const postAxios = (
  reqUrl: string,
  reqData: {},
): Promise<AxiosInstance> => {
  setHeader();
  return axios
    .create({
      method: 'post',
      timeout: 10000,
    })
    .request({ url: reqUrl, data: reqData });
};
