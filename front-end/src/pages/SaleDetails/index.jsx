import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading';
import Navbar from '../../Components/Navbar';
import OrderDetails from '../../Components/OrderDetails';
import OrderList from '../../Components/OrderList';
import TotalValueDisplay from '../../Components/TotalValueDisplay';
import { getOrderById } from '../../services/api';
import formatPrice from '../../utils/formatPrice';

function SaleDetails() {
  const [orderData, setOrderData] = useState();
  const [saleDetailsLoading, setsaleDetailsLoading] = useState(true);
  const order = useParams();
  useEffect(() => {
    async function requestOrder() {
      const orderFound = await getOrderById(order.id);
      setOrderData(orderFound.data);
      console.log(orderFound.data);
      setsaleDetailsLoading(false);
    }
    requestOrder();
  }, [order]);

  const testType = 'order_details';
  return (
    <>
      <Navbar />
      { saleDetailsLoading
        ? <Loading />
        : (
          <>
            <OrderDetails />
            <OrderList
              removeBtn={ false }
              testType={ testType }
              productsList={ orderData.products }
            />
            <TotalValueDisplay
              testType={ testType }
              value={ formatPrice(Number(orderData.totalPrice)) }
            />
          </>
        ) }
    </>
  );
}

export default SaleDetails;
