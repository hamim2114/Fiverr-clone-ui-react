import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './orders.scss';
import { isError, useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { axiosReq } from '../../utils/axiosReq';

const Orders = () => {
  const { user: currentUser } = useSelector((state) => state.user);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: orders,
  } = useQuery({
    queryKey: ['orders'],
    queryFn: () => axiosReq.get('/orders').then((res) => res.data),
  });

  useEffect(() => {
    setErrorMsg(error?.response.data);
  }, [error]);

  const handleContact = async (order) => {
    const id = order.sellerId + order.buyerId;
    try {
      const res = await axiosReq.get(`/conversations/single/${id}`);
      navigate(`/message/${res.data.id}`);
    } catch (error) {
      if (error.response.status === 404) {
        const res = await axiosReq.post('/conversations', {
          to: currentUser.isSeller ? order.buyerId : order.sellerId,
        });
        navigate(`/message/${res.data.id}`);
      }
    }
  };

  if (error || isLoading)
    return (
      <div
        style={{ color: (error && 'red') || (isLoading && 'green') }}
        className='msg'>
        <h1>{(errorMsg && errorMsg) || (isLoading && 'Loading..')}</h1>
      </div>
    );

  return (
    <div className='orders'>
      <div className='container'>
        <div className='title'>
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Contact</th>
          </tr>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>
                <img
                  className='image'
                  src={order.img}
                  alt=''
                />
              </td>
              <td>{order.title}</td>
              <td>{order.price}</td>
              <td>
                <Link to='/messages'>
                  <img
                    onClick={() => handleContact(order)}
                    className='message'
                    src='./img/message.png'
                    alt=''
                  />
                </Link>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Orders;
