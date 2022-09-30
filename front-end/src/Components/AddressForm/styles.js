import styled from 'styled-components';
import { PRIMARY_COLOR, LIGHT_GREY } from '../../Styles/Color';

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormLineDiv = styled.div`
  display: flex;
  width: 100%;
`;

export const FormInputDiv = styled.div`
  width: 100%;
  flex-grow: 1;
  & select {
    margin: 10px;
    border: 1px solid ${LIGHT_GREY};
    border-radius: 2%;
    height: 40px;
  }

  & select:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  & input {
    margin: 10px;
    border: 1px solid ${LIGHT_GREY};
    border-radius: 2%;
    height: 40px;
  }

  & input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const SendButton = styled.button`
  background: ${PRIMARY_COLOR};
  color: white;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  border: none;
`;
