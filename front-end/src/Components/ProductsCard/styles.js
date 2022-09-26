import styled from 'styled-components';

export const PageProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background: #EAF1EF;

  border: 1px solid #B1C2BE;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  margin: 40px 10px 40px 10px;
  width: 250px;
  height: 350px;

  display: flex;
  flex-flow: column wrap;
`;

export const Up = styled.div`
  height: 75%;
  width: 100%;
  align-self: center;
`;

export const Img = styled.img`
  height: 100%;
  width: inherit;
  object-fit: contain;
  background: white;
`;

export const PriceContainer = styled.div`
  position: absolute;

  width: 120px;
  height: 55px;

  margin-left: 7px;
  margin-top: 10px;

  background: rgba(242, 255, 252, 0.75);
  border-radius: 10px;
`;

export const Price = styled.p`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 42px;
  display: flex;
  align-items: center;
  text-indent: 15px;
`;

export const Down = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Title = styled.div`
  height: 40%;
  font-size: 14px;
  color: #001813;
  text-align: center;
  
`;

export const Counter = styled.div`
  height: 40%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-itens: center;
`;

export const Btn = styled.button`
  background: #036B52;
  width: 35px;
  border-radius: 4px;
`;

export const Display = styled.input`
  width: 40px;
  border-radius: 5px;
  text-align: center;
`;
