import React from 'react';
import styled from 'styled-components';
import { Github } from '@styled-icons/boxicons-logos/Github';

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
  return (
    <Box onClick={() => console.log('here')}>
      <Icon></Icon>
      <Board>GitHub 으로 로그인</Board>
    </Box>
  );
};

export default GitHubBox;