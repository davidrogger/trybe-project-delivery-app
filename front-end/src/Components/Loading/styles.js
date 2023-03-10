import styled, { keyframes } from 'styled-components';

import { PRIMARY_COLOR } from '../../Styles';

export const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid ${PRIMARY_COLOR};
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;
