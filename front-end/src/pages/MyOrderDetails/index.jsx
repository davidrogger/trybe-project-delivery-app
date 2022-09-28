import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/index';
import OrderCard from '../../Components/OrderCard';
import Loading from '../../Components/Loading';
import { getSalesByUser } from '../../services/api';
import MyOrdersDiv from './styles';

function MyOrderDetails() {
  const [myOrdersLoading, setMyOrdersLoading] = useState(true);
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    async function myOrders() {
      const user = JSON.parse(localStorage.getItem('user'));
      const order = await getSalesByUser(user.id);
      setOrderData(order.data);
      setMyOrdersLoading(false);
    }
    myOrders();
  }, []);
  return (
    <>
      <Navbar />
      {
        myOrdersLoading ? <Loading />
          : (
            <MyOrdersDiv>
              {
                orderData?.map((el, index) => (
                  <div key={ index }>
                    <OrderCard
                      id={ el.id }
                      status={ el.status }
                      date={ el.saleDate }
                      totalPrice={ el.totalPrice }
                    />
                  </div>
                ))
              }
            </MyOrdersDiv>
          )
      }

    </>
  );
}

export default MyOrderDetails;
