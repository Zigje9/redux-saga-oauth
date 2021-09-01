import React from 'react';
import Container from '../components/common/container';
import GitHubBox from '../components/loginView/githubBox';

const LoginView: React.FC = () => {
  return (
    <Container>
      <GitHubBox />
    </Container>
  );
};

export default LoginView;
