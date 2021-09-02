import React from 'react';
import styled from 'styled-components';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { v4 as uuidv4 } from 'uuid';

const Box = styled.div`
  display: flex;
  width: 35%;
  height: 15%;
  align-items: center;
`;

const Icon = styled(Github)`
  width: 20%;
  &:hover {
    cursor: pointer;
    color: #e0e0e0;
  }
`;

const Board = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 30px;
  background-color: black;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: #e0e0e0;
    color: black;
  }
`;

const GitHubBox: React.FC = () => {
  const githubAuthorization = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=5fbae1d0c027c91c57ba&state=${uuidv4()}`;
  };
  return (
    <Box onClick={() => githubAuthorization()}>
      <Icon></Icon>
      <Board>GitHub 으로 로그인</Board>
    </Box>
  );
};

export default GitHubBox;
