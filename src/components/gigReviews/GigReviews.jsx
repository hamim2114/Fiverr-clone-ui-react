import { useState } from 'react';
import { axiosReq } from '../../utils/axiosReq';
import GigReview from '../gigReview/GigReview';
import './GigReviews.scss';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'

const GigReviews = ({gigId}) => {
  const queryClient = useQueryClient()
  const [errorMsg, setErrorMsg] = useState('')
  const {isLoading, error, data} = useQuery({
    queryKey: ['reviews'],
    queryFn: () => axiosReq.get(`/reviews/${gigId}`).then(res => res.data)
  })
  //for immediet update
  const mutation = useMutation({
    mutationFn: (review) => axiosReq.post('/reviews', review),
    onSuccess: () => queryClient.invalidateQueries(['reviews']),
    onError: (err) => setErrorMsg(err.response.data)
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    const desc = e.target[0].value
    const star = e.target[1].value
    mutation.mutate({gigId, desc,star})
    e.target[0].value = '';
    e.target[1].value = '';
  }

  return (
    <div className='reviews'>
      <h2>Reviews</h2>
        {data?.map(item => (
          <GigReview key={item._id} review={item} />
        ))}
        <div className="form">
          <h4>Add a Review</h4>
          <form onSubmit={handleSubmit}>
            <input required type="text" placeholder='write your opinion' />
            <h6>Rating</h6>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option selected value="5">5</option>
            </select>
            <button type='submit'>Submit</button>
            {errorMsg && <span>{errorMsg}</span>}
          </form>
        </div>
    </div>
  );
};

export default GigReviews;
