import styled from 'styled-components';
import { statusBgColor } from '../../Styles/Color';

export const OrderCardBody = styled.div`
  display: flex;
  width: 40%;
  height: 180px;
  border: 1px solid rgba(0,0,0,0.10);
  box-shadow: 2px 5px 6px -2px rgba(0,0,0,0.53);
  &:hover {
    cursor: pointer;
  }
  margin: 10px;
`;

export const OrderIdDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100%;
  width: 20%;
`;

export const OrderInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  background: #B1C2BE;
`;

export const OrderInfoUp = styled.div`
  display: flex;
  margin: 10px;
  width: 100% - margin;
  flex-grow: 1;
`;

export const OrderSubInfo = styled.div`
  display: flex;
  align-items: center;
  width: 49.5%;
  margin: 5px;
`;

// Status
export const OrderSubInfo1 = styled(OrderSubInfo)`
  justify-content: center;
  height: 100% - margin;
  background: ${(props) => (statusBgColor[props.children])};
  border-radius: 10px;
`;

// Data e preço
export const OrderSubInfo2 = styled(OrderSubInfo)`
  flex-direction: column;
`;

export const HighlightInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 5px 0;
  flex-grow: 1;
  border-radius: 10px;
  background: #F2FFFCBF;
`;

export const IdSpan = styled.span`
  font-size: 1.4rem;
`;

export const OrderInfoDown = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 5%;
  margin-right: 10px;
  height: 10%;
`;
