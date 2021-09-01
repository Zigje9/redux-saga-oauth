import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Container: React.FC = () => {
  return <ContainerDiv />;
};

export default Container;
