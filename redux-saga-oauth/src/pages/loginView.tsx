import React, { useEffect } from 'react';
import Container from '../components/common/container';
import GitHubBox from '../components/loginView/githubBox';
import qs from 'qs';

interface QueryString<T> {
  code?: T;
  site?: T;
  state?: T;
}

const LoginView: React.FC = () => {
  useEffect(() => {
    const { code, site, state }: QueryString<string> = qs.parse(
      window.location.search,
      {
        ignoreQueryPrefix: true,
      },
    );
    console.log(code, site, state);
  }, []);
  return (
    <Container>
      <GitHubBox />
    </Container>
  );
};

export default LoginView;
