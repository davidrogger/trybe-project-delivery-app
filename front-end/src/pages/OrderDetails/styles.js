import styled from 'styled-components';

export const OrderDetails = styled.div`
  & span {
    margin-left: 20px;
    margin-bottom: 10px;
  }
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

export const ContentDiv = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0,0,0,0.10);
  box-shadow: 2px 5px 6px -2px rgba(0,0,0,0.53);
`;
