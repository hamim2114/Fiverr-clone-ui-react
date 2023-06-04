import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {axiosReq} from '../../utils/axiosReq';
import './myGigs.scss';

const MyGigs = () => {
  const {user} = useSelector((state) => state.user);

  const {isLoading, error, data} = useQuery({
    queryKey: ['myGigs'],
    queryFn: () =>
      axiosReq.get(`/gigs?userId=${user._id}`).then((res) => res.data),
  });
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id) => axiosReq.delete(`/gigs/${id}`),
    onSuccess: () => queryClient.invalidateQueries(['myGigs']),
  });
  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className='mygigs'>
      <div className='container'>
        <div className='title'>
          <h1>Gigs</h1>
          <Link to='/add'>
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>
          </thead>
          {isLoading
            ? 'Loading..'
            : error
            ? 'Something wrong!'
            : data.map((gig) => (
                <tr key={gig._id}>
                  <td>
                    <img className='image' src={gig.cover} alt='' />
                  </td>
                  <td>{gig.title}</td>
                  <td>{gig.price}</td>
                  <td>{gig.sales}</td>
                  <td>
                    <img
                      onClick={() => handleDelete(gig._id)}
                      className='delete'
                      src='./img/delete.png'
                      alt=''
                    />
                  </td>
                </tr>
              ))}
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
