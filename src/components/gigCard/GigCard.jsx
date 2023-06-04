import { Link } from 'react-router-dom';
import {useQuery} from '@tanstack/react-query'
import './gigCard.scss';
import { axiosReq } from '../../utils/axiosReq';

const GigCard = ({ item }) => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['gigsUser'],
        queryFn: () =>
          axiosReq.get(`/users/${item.userId}`).then(res => res.data)
      })
 
    return (
        <Link className='link' to={`/gig/${item._id}`}>
        <div className='gigcard'>
            <img src={item.cover} alt='' />
            <div className='info'>
                <div className='user'>
                    <img src={data?.img} alt='' />
                    <span>{data?.username}</span>
                </div>
                <p>{item.title}</p>
                <div className='star'>
                    <img src='./img/star.png' alt='' />
                    <span>{!isNaN(item.totalStars / item.starNumber) && Math.round(item.totalStars / item.starNumber)}</span>
                </div>
            </div>
            <hr />
            <div className='details'>
                <img src='./img/heart.png' alt='' />
                <div className='price'>
                    <span>STARTING AT</span>
                    <h2>${item.price}</h2>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default GigCard;
