import { useContext } from 'react';
import MyContext from '../../context/MyContext';

function FinalOrder() {
  const { cartTotalValue } = useContext(MyContext);
  return (
    <div>
      tabela
      header
      itens
      <div>
        Total:
        { cartTotalValue }
      </div>

      <div>
        Select de Vendedores
        input endereço
        input número
        botão para finalizar o pedido
      </div>
    </div>
  );
}

export default FinalOrder;
