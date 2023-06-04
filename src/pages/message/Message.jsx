import { Link, useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { axiosReq } from '../../utils/axiosReq';
import './message.scss';
import { useSelector } from 'react-redux';

const Messages = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.user);

  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ['messages'],
    queryFn: () => axiosReq.get(`/messages/${id}`).then((res) => res.data),
  });
  const mutation = useMutation({
    mutationFn: (msg) => axiosReq.post('/messages', msg),
    onSuccess: () => queryClient.invalidateQueries(['messages']),
    onError: (err) => console.log(err),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = '';
  };

  return (
    <div className='msg'>
      <div className='container'>
        <span className='breadcrumbs'>
          <Link to='/messages'>MESSAGES</Link> {'>'} JOHN DOE {'>'}
        </span>
        <div className='messages'>
          {isLoading
            ? 'Loading..'
            : error
            ? 'Something wrong!'
            : data.map((m) => (
                <div key={m._id} className={user._id === m.userId ? 'item owner' : 'item'}>
                  <img
                    src='https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/2515d88b0dc818b3a667eb9d005dd006-1673780921504/fb13ec8b-9da2-435f-9a9d-6b6d92864f36.jpg'
                    alt=''
                  />
                  <p>{m.desc}</p>
                </div>
              ))}
        </div>
        <hr />
        <form
          onSubmit={handleSubmit}
          className='write'>
          <textarea
            placeholder='Write a message'
            cols='30'
            rows='10'></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Messages;
