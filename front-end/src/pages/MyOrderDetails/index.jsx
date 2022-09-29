import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/index';
import OrderCard from '../../Components/OrderCard';
import Loading from '../../Components/Loading';
import { getSalesByUser } from '../../services/api';
import { MyOrdersDiv, RedirectDiv } from './styles';

function MyOrderDetails() {
  const navigate = useNavigate();
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
                  <RedirectDiv
                    key={ index }
                    onClick={ () => navigate(`/customer/orders/${el.id}`) }
                  >
                    <OrderCard
                      id={ el.id }
                      status={ el.status }
                      date={ el.saleDate }
                      totalPrice={ el.totalPrice }
                    />
                  </RedirectDiv>
                ))
              }
            </MyOrdersDiv>
          )
      }

    </>
  );
}

export default MyOrderDetails;
