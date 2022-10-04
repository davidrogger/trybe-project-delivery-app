import styled from 'styled-components';
// import * as DEFAULT from '../../Styles';

export const LogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30%;
  width: 80%;
  margin-bottom: 50px;
`;

export const ImgConfig = styled.img`
  border-radius: 10px;
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

export const Title = styled.h1`
  text-align: center;
  transform: rotate(-10deg);
  font-family: Peralta;
  background: #A31D2B;
  background: linear-gradient(to right, #A31D2B 42%, #013025 38%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
