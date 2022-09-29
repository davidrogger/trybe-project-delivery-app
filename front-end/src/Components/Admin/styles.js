import styled from 'styled-components';

export const Main = styled.main`
  display: flex;  
  flex-direction: column;
  align-items: left;
  margin: 25px 75px 10px 45px;
`;

export const Title = styled.p`
  height: 15px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
`;

export const Inputs = styled.form`
  background: #FBFFFE;
  box-shadow: 2px 2px 6px gray;

  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-itens: center;

  padding: 5px;
`;

export const Label = styled.label`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-itens: left;


  input {
    background: #FFFFFF;
    border: 1px solid #001813;
    border-radius: 5px;
    height: 11px;
    width: 160px;

    padding: 13px
  }

  select {
    background: #FFFFFF;
    border: 1px solid #001813;
    border-radius: 5px;
    height: 42px;
    width: 160px;
  }

`;

export const Btn = styled.button`
  background: #036B52;
  border-radius: 10px;
  height: 50px;
  font-weight: 200;
  font-size: 18px;
  line-height: 23px;
  color: #F2FFFC;
  text-align: center;
`;
