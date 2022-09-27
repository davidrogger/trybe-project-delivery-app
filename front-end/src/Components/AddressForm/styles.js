import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../Styles/Color';

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormLineDiv = styled.div`
  display: flex;
`;

export const FormInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const SendButton = styled.button`
  background: ${PRIMARY_COLOR};
  color: white;
  padding: 15px;
  border-radius: 10px;
  border: none;
`;
