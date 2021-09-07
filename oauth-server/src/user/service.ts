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
    const response = axios.post(
      `${process.env.GITHUB_TOKEN_URL}/?code=${code}&state=${state}`,
    );
    const { data } = response as unknown as TokenData;
    return data.access_token;
  } catch (error) {
    console.log(error);
  }
};
