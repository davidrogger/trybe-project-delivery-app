import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/index';
import OrderCard from '../../Components/OrderCard';
import Loading from '../../Components/Loading';
import { getCustomerOrders } from '../../services/api';
import { MyOrdersDiv } from './styles';

const requestType = {
  customer: getCustomerOrders,
  seller: '',
};

function Orders() {
  const route = useParams();
  const [myOrdersLoading, setMyOrdersLoading] = useState(true);
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    async function myOrders() {
      const user = JSON.parse(localStorage.getItem('user'));
      console.log();
      const order = await requestType[route.type](user.id);
      setOrderData(order.data);
      setMyOrdersLoading(false);
    }
    myOrders();
  }, [route]);
  return (
    <>
      <Navbar />
      {
        myOrdersLoading ? <Loading />
          : (
            <MyOrdersDiv>
              {
                orderData?.map((el) => (
                  <OrderCard
                    key={ el.id }
                    { ...el }
                    type="customer"
                  />
                ))
              }
            </MyOrdersDiv>
          )
      }

    </>
  );
}

export default Orders;
