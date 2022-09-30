import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading';
import Navbar from '../../Components/Navbar';
import OrderDetails from '../../Components/OrderDetails';
import OrderList from '../../Components/OrderList';
import TotalValueDisplay from '../../Components/TotalValueDisplay';
import { getOrderById, getUserById } from '../../services/api';
import formatPrice from '../../utils/formatPrice';
import * as Style from './styles';

function SaleDetails() {
  const [orderData, setOrderData] = useState();
  const [saleDetailsLoading, setsaleDetailsLoading] = useState(true);
  const [reloading, setReloading] = useState(false);
  const [seller, setSeller] = useState();
  const route = useParams();

  useEffect(() => {
    async function requestOrder() {
      const orderFound = await getOrderById(route.id);
      setOrderData(orderFound.data);
      const sellerData = await getUserById(orderFound.data.sellerId);
      setSeller(sellerData.data);
      setsaleDetailsLoading(false);
    }
    requestOrder();
  }, [route, reloading]);

  const tableType = 'order_details';
  return (
    <>
      <Navbar />
      { saleDetailsLoading
        ? <Loading />
        : (
          <Style.OrderDetails>
            <span>Detalhe do Pedido</span>
            <Style.ContentDiv>
              <OrderDetails
                saleId={ orderData.id }
                date={ orderData.saleDate }
                status={ orderData.status }
                sellerName={ seller.name }
                setsaleDetailsLoading={ setsaleDetailsLoading }
                setReloading={ setReloading }
                reloading={ reloading }
                userType={ route.type }
              />
              <OrderList
                removeBtn={ false }
                tableType={ tableType }
                userType={ route.type }
                productsList={ orderData.products }
              />
              <TotalValueDisplay
                tableType={ tableType }
                userType={ route.type }
                value={ formatPrice(Number(orderData.totalPrice)) }
              />
            </Style.ContentDiv>
          </Style.OrderDetails>
        ) }
    </>
  );
}

export default SaleDetails;
