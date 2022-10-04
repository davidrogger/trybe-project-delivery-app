import styled from 'styled-components';
import { LIGHT_GREY, PRIMARY_COLOR, statusBgColor } from '../../Styles';

export const SaleDetailsDiv = styled.div`
  background: ${LIGHT_GREY};
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  height: 25px;
  width: 100%;
`;

// export const Down = styled.div`
//   height: 500px;
//   width: 100%;
// `;

const DivDefault = styled.div`
  flex-grow: 1;
`;

export const DivPedido = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 2;
`;

export const SellerNameDiv = styled(DivDefault)`

`;

export const DivData = styled(DivDefault)`

`;

export const SpanData = styled.span`
  height: 95%;
  padding: 1px 10px;
  border-radius: 5px;
  background: #F2FFFC;
`;

export const DivStatus = styled(DivDefault)`
  border-radius: 5px;
  padding: 2px 0;
  margin: 0 5px;
  color: white;
  background: ${(props) => (statusBgColor[props.children])};
`;

export const OrderId = styled(DivDefault)`

`;

export const Button = styled.button`
  background: ${PRIMARY_COLOR};
  margin: 5px;
  color: white;
  border-radius: 5px;
  heigth: 95%;
  :disabled {
    color: gray;
  }
`;
