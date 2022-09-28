import styled from 'styled-components';
import { PRIMARY_COLOR, SECOND_COLOR } from '../../Styles/Color';

export const NavBody = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
`;

const NavDefaultButtom = styled.div`
  display: flex;
  height: 100%;
  width: 35px;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const NavOrdersButtom = styled(NavDefaultButtom)`
   &:hover {
    cursor: pointer;
  }
  flex-grow: 10;
  background: ${PRIMARY_COLOR};
  padding-left: 25px;
  justify-content: left;
`;

export const NavProductsButtom = styled(NavDefaultButtom)`
    &:hover {
    cursor: pointer;
  }
  flex-grow: 2;
  align-items: center;
  background: ${SECOND_COLOR};
  color: black;
`;

export const NavUserNameButtom = styled(NavProductsButtom)`
  flex-grow: 3;  
  background: #421981;
  align-items: center;
  color: white;
`;

export const NavLeaveButtom = styled(NavDefaultButtom)`
    &:hover {
    cursor: pointer;
  }
  flex-grow: 1;
  background: #056cf9;
`;
