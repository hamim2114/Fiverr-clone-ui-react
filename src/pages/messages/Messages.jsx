import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import './messages.scss';
import { axiosReq } from '../../utils/axiosReq';
import moment from 'moment';

const Messages = () => {
  const { user: currentUser } = useSelector((state) => state.user);

  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ['conversations'],
    queryFn: () => axiosReq.get('/conversations').then((res) => res.data),
  });
  const mutation = useMutation({
    mutationFn: (id) => axiosReq.put(`/conversations/${id}`),
    onSuccess: () => queryClient.invalidateQueries(['conversations'])
  });

  const handleClick = (id) => {
    mutation.mutate(id)
  }

  if (isLoading) return 'Loading..';

  return (
    <div className='messages'>
      <div className='container'>
        <div className='title'>
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>{currentUser?.isSeller ? 'Buyer' : 'Seller'}</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          {data.map((c) => (
            <tr
              key={c.id}
              className={(currentUser?.isSeller && !c.readBySeller) ||
                (!currentUser?.isSeller && !c.readByBuyer && (
                  'active'
                ))}>
              <td>{currentUser?.isSeller ? c.buyerId : c.sellerId}</td>
              <td>
                <Link
                  to={`/message/${c.id}`}
                  className='link'>
                  {c?.lastMessage?.substring(0, 100)}...
                </Link>
              </td>
              <td>{moment(c.updateAt).fromNow()}</td>
              <td>
                {(currentUser?.isSeller && !c.readBySeller) ||
                  (!currentUser?.isSeller && !c.readByBuyer && (
                    <button onClick={() => handleClick(c.id)}>Mark as Read</button>
                  ))}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Messages;
