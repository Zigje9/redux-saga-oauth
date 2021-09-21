import axios from 'axios';
interface TokenData {
  data: {
    access_token: string;
  };
}

export const getAccessToken = async (
  code: string,
  state: string,
  site: string,
) => {
  try {
    const url = `${process.env.GITHUB_TOKEN_URL}/?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${code}&state=${state}`;
    const response = await axios.post(url);
    const accessToken = /(access_token=)(.*?)(&scope)/.exec(response.data)[2];
    return accessToken;
  } catch (error) {
    console.log(error);
  }
};

export const getInfo = async (accessToken: string) => {
  try {
    const url = ``;
    const response = await axios.post(url);
    const userInfo = {};
    return userInfo;
  } catch (error) {
    console.log(error);
  }
};
