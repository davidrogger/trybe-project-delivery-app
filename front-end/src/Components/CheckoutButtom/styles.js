import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../Styles/Color';

export const CartButton = styled.button`
  position: fixed;
  background: ${PRIMARY_COLOR};
  height: 80px;
  width: 130px;
  padding: 10px 20px;
  top: 60px;
  right: 10px;
  border-radius: 20px 10px;
  color: white;
  border: none;
  :hover {
    opacity: 0.8;
  }
`;

export const CartButtonContent = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
