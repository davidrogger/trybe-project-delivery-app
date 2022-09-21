import styled from 'styled-components';
import { GREY, RED } from '../../Styles/Color';

export const Form = styled.form`
  display:flex;
  flex-flow: column wrap;
  justify-content: center;
  border: 1px solid ${GREY};
  border-radius: 8px;
  height: 400px;
  width: 400px;
`;

export const Label = styled.label`
  display: flex;
  flex-flow: column wrap;
  margin: 10px 15px;
  align-self: center;
`;

export const Button = styled.button`
  border: none;
  border-radius: 6px;
  margin: 15px;
  height: 25px;
  width: 250px;
  align-self: center;
`;

export const Error = styled.p`
  color: ${RED};
  align-self: center;

`;

export const Input = styled.input`
  &:focus {
    box-shadow: 0000;
    outline: 0;
  }
  border: none;
  border-radius: 4px;
  margin-top: 6px;
  height: 20px;
  width: 300px;
  align-self: center
`;
