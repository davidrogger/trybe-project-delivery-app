import styled from 'styled-components';
import { PRIMARY_COLOR } from '../../Styles';

export const Table = styled.table`
  padding-bottom: 10px;
  width: 100%;
`;

export const THead = styled.thead`
  & tr {
    margin-left: 10px;
    margin-top: 5px;
  }
  margin-bottom: 20px;
`;

export const TBody = styled.tbody`
  & tr {
   text-align: center;
   margin-top: 5px;
  }
  width: 100%;
`;

export const Button = styled.button`
  background: ${PRIMARY_COLOR};
  color: white;
  padding: 6px;
  right: 5px;
  bottom: 5px;
  border: none;
  border-radius: 10px;
`;
