import React, { useEffect } from 'react';
import Container from '../components/common/container';
import GitHubBox from '../components/loginView/githubBox';
import qs from 'qs';
import { useDispatch } from 'react-redux';
import { authenticationRequest } from '../actions/user';

interface QueryString {
  code: string;
  site: string;
  state: string;
}

const LoginView: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const { code, site, state } = qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
    }) as unknown as QueryString;
    console.log(site);
    dispatch(authenticationRequest(code, state));
  });
  return (
    <Container>
      <GitHubBox />
    </Container>
  );
};

export default LoginView;
