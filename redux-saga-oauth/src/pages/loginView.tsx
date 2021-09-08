import React, { useEffect } from 'react';
import Container from '../components/common/container';
import GitHubBox from '../components/loginView/githubBox';
import qs from 'qs';
import { useDispatch } from 'react-redux';
import { authenticationRequest } from '../actions/user';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';

interface QueryString {
  code: string;
  site: string;
  state: string;
}

const LoginView: React.FC = () => {
  const { isLoading } = useSelector((state: RootState) => state.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    const { code, state, site } = qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
    }) as unknown as QueryString;
    dispatch(authenticationRequest(code, state, site));
  }, [dispatch]);
  return (
    <>
      {isLoading ? (
        <>
          <h2>로딩중</h2>
        </>
      ) : (
        <Container>
          <GitHubBox />
        </Container>
      )}
    </>
  );
};

export default LoginView;
