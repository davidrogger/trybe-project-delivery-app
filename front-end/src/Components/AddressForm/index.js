import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllSellers, createOrders } from '../../services/api';
import MyContext from '../../context/MyContext';
import * as style from './styles';

function AddressForm() {
  const navigate = useNavigate();
  const [sellers, setSellers] = useState([]);
  const {
    setCartProducts,
    cartProducts,
    cartTotalValue } = useContext(MyContext);

  const handleSubmit = async (e) => {
    const user = JSON.parse(localStorage.getItem('user'));
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const obj = {
      userId: user.id,
      sellerId: Number(data.sellerId),
      totalPrice: cartTotalValue,
      deliveryAddress: data.deliveryAddress,
      deliveryNumber: data.deliveryNumber,
      products: cartProducts.map(({ id, quantity }) => ({ productId: id, quantity })),
    };

    const res = await createOrders(obj.userId, obj, user.token);
    setCartProducts([]);
    navigate(`/customer/orders/${res.data.id}`);
  };

  useEffect(() => {
    async function requestSellers() {
      const response = await getAllSellers();
      setSellers(response.data);
    }
    requestSellers();
  }, []);

  return (
    <style.AddressForm onSubmit={ handleSubmit }>
      <style.FormLineDiv>
        <style.FormInputDiv>
          P.Vendedora Responsável

          <select
            id="seller_name"
            data-testid="customer_checkout__select-seller"
            name="sellerId"
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
            name="deliveryAddress"
          />

        </style.FormInputDiv>

        <style.FormInputDiv>
          Número

          <input
            type="text"
            placeholder="198"
            data-testid="customer_checkout__input-address-number"
            name="deliveryNumber"
          />

        </style.FormInputDiv>
      </style.FormLineDiv>
      <style.SendButton
        type="submit"
        data-testid="customer_checkout__button-submit-order"
      >
        FINALIZAR PEDIDO

      </style.SendButton>
    </style.AddressForm>
  );
}

export default AddressForm;
