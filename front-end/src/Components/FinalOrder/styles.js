import styled from 'styled-components';

import { PRIMARY_COLOR } from '../../Styles/Color';

export const TotalValueField = styled.div`
  display: flex;
  position: absolute;
  background: ${PRIMARY_COLOR};
  color: white;
  padding: 15px;
  right: 10px;
  bottom: 10px;
  border-radius: 10px;
`;

export const FinalOrderDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 90%;
  height: 50%;
`;

export const TableOrder = styled.table`
  
`;

export const Title = styled.h3`

`;

export const ContentDiv = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0,0,0,0.10);
  box-shadow: 2px 5px 6px -2px rgba(0,0,0,0.53);
`;
