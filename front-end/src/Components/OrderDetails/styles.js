import styled from 'styled-components';
import { LIGHT_GREY } from '../../Styles/Color';

export const SaleDetailsDiv = styled.div`
  background: ${LIGHT_GREY};
  display: flex;
  flex-direction: row;
  text-align: center;
  height: 20px;
  width: 100%;
`;

export const Down = styled.div`
  height: 500px;
  width: 100%;
`;

export const DivPedido = styled.div`
  & div :nth-child(1) {
    margin-left: 3px;
    margin-right: 10px;
  }
  display: flex;
  flex-direction: row;
  margin-left: 20px;
`;

export const SellerNameDiv = styled.div`
  margin-left: 60px;
`;

export const DivData = styled.div`
  margin-left: 150px;
`;

export const DivStatus = styled.div`
  margin-left: 170px;
`;

export const Button = styled.button`
  margin-left: 120px;
`;
