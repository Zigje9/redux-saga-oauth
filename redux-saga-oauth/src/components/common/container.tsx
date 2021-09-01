import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Container: React.FC = ({ children }) => {
  return <ContainerDiv>{children}</ContainerDiv>;
};

export default Container;
