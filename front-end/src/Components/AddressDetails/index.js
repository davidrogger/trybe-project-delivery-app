import * as style from './styles';
import { ContentDiv, Title } from '../FinalOrder/styles';
import AddressForm from '../AddressForm';

function AddressDetails() {
  return (
    <style.AddressDiv>
      <Title>Detalhes e Endereço para Entrega</Title>
      <ContentDiv>
        <AddressForm />
      </ContentDiv>
    </style.AddressDiv>
  );
}

export default AddressDetails;
