import styled from 'styled-components';

export const CardBody = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 200px;
  height: 200px;
  margin: 50px;
  border: 1px solid black
`;

export const TitleDiv = styled.div`
  align-self: center;
  order: -1;
`;

export const Title = styled.h5`
  text-align: center;
`;

export const PriceDiv = styled.div`
  align-self: center;
  order: 0;
`;

export const Price = styled.p`
  text-align: center;
`;

export const ImageDiv = styled.div`
  align-self: center;
  order: 1;
`;

export const Img = styled.img`
  height: 70px;
  width: 80px;
`;
