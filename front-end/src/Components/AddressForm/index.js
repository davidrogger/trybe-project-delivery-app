import { useState, useEffect } from 'react';
import { getAllSellers } from '../../services/api';
import * as style from './styles';

function AddressForm() {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    async function requestSellers() {
      const response = await getAllSellers();
      setSellers(response.data);
    }
    requestSellers();
  }, []);

  return (
    <style.AddressForm>
      <style.FormLineDiv>
        <style.FormInputDiv>
          P.Vendedora Responsável

          <select
            id="seller_name"
            data-testid="customer_checkout__select-seller"
          >
            {sellers.map((seller) => (
              <option
                key={ seller.id }
                value={ seller.id }
              >
                {seller.name}
              </option>
            ))}
          </select>

        </style.FormInputDiv>

        <style.FormInputDiv>
          Endereço

          <input
            type="text"
            placeholder="Travessa Terceira"
            data-testid="customer_checkout__input-address"
          />

        </style.FormInputDiv>

        <style.FormInputDiv>
          Número

          <input
            type="text"
            placeholder="198"
            data-testid="customer_checkout__input-address-number"
          />

        </style.FormInputDiv>
      </style.FormLineDiv>
      <style.SendButton
        type="button"
        data-testid="customer_checkout__button-submit-order"
      >
        FINALIZAR PEDIDO

      </style.SendButton>
    </style.AddressForm>
  );
}

export default AddressForm;
