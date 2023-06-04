import { Slider } from 'infinite-react-carousel/lib';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import './gig.scss';
import { axiosReq } from '../../utils/axiosReq';
import GigReviews from '../../components/gigReviews/GigReviews';

const Gig = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ['singleGig'],
    queryFn: () => axiosReq.get(`/gigs/single/${id}`).then((res) => res.data),
  });

  const userId = data?.userId

  const { isLoading: userLoading, error: userError, data: user } = useQuery({
    queryKey: ['user'],
    queryFn: () => axiosReq.get(`/users/${data.userId}`).then((res) => res.data),
    enabled: !!userId
  });
  // console.log(user);
  if (isLoading) return 'loading..';
  if (error) return 'something wrong!..';
  return (
    <div className='gig'>
      <div className='container'>
        <div className='left'>
          <div className='breadCrumbs'>FIVER > GRAPHIC & DESIGN</div>
          <h1>{data.title}</h1>
          {userLoading? 'loading..' : userError ? 'something went wrong!' : <div className='user'>
            <img
              className='pp'
              src={user.img || '/img/noavatar.jpg'}
              alt=''
            />
            <span>{user.username}</span>
            {!isNaN(data.totalStars / data.starNumber) && (
                  <div className='stars'>
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <img key={i}
                          src='/img/star.png'
                          alt=''
                        />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
          </div>}
          <Slider className='slider'>
            {data.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=''
              />
            ))}
          </Slider>
          <h2>About This Gig</h2>
          <p>{data.desc}</p>
          {userLoading? 'loading..' : userError ? 'something went wrong!' : <div className='seller'>
            <h2>About The Seller</h2>
            <div className='user'>
              <img
                src={user.img || '/img/noavatar.jpg'}
                alt=''
              />
              <div className='info'>
                <span>{user.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className='stars'>
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <img key={i}
                          src='/img/star.png'
                          alt=''
                        />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
                <button>Contact Me</button>
              </div>
            </div>
            <div className='box'>
              <div className='items'>
                <div className='item'>
                  <span className='title'>From</span>
                  <span className='desc'>{user.country?.toUpperCase()}</span>
                </div>
                <div className='item'>
                  <span className='title'>Member since</span>
                  <span className='desc'>Aug 2022</span>
                </div>
                <div className='item'>
                  <span className='title'>Avg. response time</span>
                  <span className='desc'>4 hours</span>
                </div>
                <div className='item'>
                  <span className='title'>Last delivery</span>
                  <span className='desc'>1 day</span>
                </div>
                <div className='item'>
                  <span className='title'>Languages</span>
                  <span className='desc'>English</span>
                </div>
              </div>
              <hr />
              <p>
                {user.desc}
              </p>
            </div>
          </div>}
          <GigReviews gigId={id}/>
        </div>
        <div className='right'>
          <div className='price'>
            <h2>{data.shortTitle}</h2>
            <h3>{data.price}</h3>
          </div>
          <p>{data.shortDesc}</p>
          <div className='time'>
            <img
              src='/img/clock.png'
              alt=''
            />
            <span>{data.deliveryTime} Day Delivery</span>
          </div>
          <div className='details'>
            <div className='item'>
              <img
                src='/img/greencheck.png'
                alt=''
              />
              <span>Prompt writing</span>
            </div>
            <div className='item'>
              <img
                src='/img/greencheck.png'
                alt=''
              />
              <span>Prompt delivery</span>
            </div>
            <div className='item'>
              <img
                src='/img/greencheck.png'
                alt=''
              />
              <span>Generated image examples</span>
            </div>
            <div className='item'>
              <img
                src='/img/greencheck.png'
                alt=''
              />
              <span>Instructions</span>
            </div>
            <div className='item'>
              <img
                src='/img/greencheck.png'
                alt=''
              />
              <span>Artwork delivery</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
