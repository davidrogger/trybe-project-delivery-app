import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../Styles/Color';

export const CartButton = styled.button`
  position: fixed;
  background: ${PRIMARY_COLOR};
  height: 80px;
  width: 110px;
  padding: 10px 20px;
  top: 60px;
  right: 10px;
  border-radius: 10px;
  color: white;
  border: none;
`;

export const CartButtonContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
