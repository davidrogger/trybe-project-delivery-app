import styled from 'styled-components';
import * as DEFAULT from '../../Styles';

export const Form = styled.form`
  display:flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${DEFAULT.GREY};
  height: 500px;
  width: 300px;
  ${DEFAULT.BOX_SHADOW};
  ${DEFAULT.BORDER_SHADOW};
  background: ${DEFAULT.LIGHT_GREY};
`;

export const Label = styled.label`
  display: flex;
  flex-flow: column;
  margin: 10px 15px;
  width: 80%;
  font-family: roboto;
`;

export const Button = styled.button`
  border: none;
  border-radius: 6px;
  margin: 15px;
  height: 25px;
  width: 80%;
  :disabled {
    opacity: 0.4;
  }
  background: ${DEFAULT.PRIMARY_COLOR};
  color: ${DEFAULT.LIGHT_GREY};
`;

export const Error = styled.p`
  color: ${DEFAULT.RED};
  align-self: center;

`;

export const Input = styled.input`
  border: none;
  border-radius: 2px;
  margin-top: 6px;
  height: 20px;
  width: 100%;
`;

export const AppIcoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
  width: 80%;
  border: 1px solid black;
`;
