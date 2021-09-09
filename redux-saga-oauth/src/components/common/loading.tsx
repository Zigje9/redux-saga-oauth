import React from 'react';
import styled, { keyframes } from 'styled-components';
import Container from './container';

interface SpinProps {
  info: number[];
}

const blink = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const SpinnerBox = styled.div`
  display: inline-block;
  position: relative;
  width: 100px;
  height: 100px;
`;

const Spin = styled.div<SpinProps>`
  transform-origin: 45px 45px;
  animation: ${blink} 1.2s linear infinite;
  transform: ${(props) => `rotate(${props.info[0]}deg)`};
  animation-delay: ${(props) => `${props.info[1]}s`};
  &:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 7px;
    left: 30px;
    width: 5px;
    height: 15px;
    background: gray;
  }
`;

const Loading: React.FC = () => {
  const spinArr = Array.from(Array(12), (_, idx) => {
    return [idx * 30, -1.1 + idx * 0.1];
  });
  return (
    <Container>
      <h3>Loading ...</h3>
      <SpinnerBox>
        {spinArr.map(([deg, time], idx) => {
          return <Spin key={idx} info={[deg, time]}></Spin>;
        })}
      </SpinnerBox>
    </Container>
  );
};

export default Loading;
