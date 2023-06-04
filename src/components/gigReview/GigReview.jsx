import { axiosReq } from '../../utils/axiosReq'
import './GigReview.scss'
import {useQuery} from '@tanstack/react-query'

const GigReview = ({review}) => {
  const {isLoading, error, data: user} = useQuery({
    queryKey: [review.userId],
    queryFn: () => axiosReq.get(`/users/${review.userId}`).then(res => res.data)
  })

  return (
    <div className='item'>
        {isLoading ? 'loading..' : error ? 'error!' : <div className='user'>
          <img
            src={user.img}
            alt=''
          />
          <div className='info'>
            <span>{user.username}</span>
            <div className='country'>
              <img
                src='https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png'
                alt=''
              />
              <span>United State</span>
            </div>
          </div>
        </div>}
        <div className='stars'>
          {Array(review.star).fill().map((item,i) => (
            <img
              key={i}
              src='/img/star.png'
              alt=''
            />
          ))}
          <span>{review.star}</span>
        </div>
        <p>
          {review.desc}
        </p>
        <div className='helpful'>
          <span>Helpful?</span>
          <img
            src='/img/like.png'
            alt=''
          />
          <span>Yes</span>
          <img
            src='/img/dislike.png'
            alt=''
          />
          <span>No</span>
        </div>
      </div>
  )
}

export default GigReview