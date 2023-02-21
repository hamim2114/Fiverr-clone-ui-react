import { Slider } from 'infinite-react-carousel/lib';
import './reviews.scss';
import { BsFillPlayFill } from 'react-icons/bs';
import { reviews } from '../../data';

const Reviews = () => {
    const SlideCard = ({ data }) => {
        return (
            <div className='slide'>
                <div className='image'>
                    <span>
                        <BsFillPlayFill className='icon' />
                    </span>
                    <img src={data.img} alt='' />
                </div>
                <div className='desc'>
                    <h4>{data.name}</h4>
                    <p>{data.desc}</p>
                </div>
            </div>
        );
    };
    return (
        <div className='reviews'>
            <div className='container'>
                <Slider>
                    {reviews.map((data) => (
                        <SlideCard data={data} key={data.id} />
                    ))}
                </Slider>
                <div className='logomaker'>
                    <div className='container'>
                        <div className='left'>
                            <h2>Fiverr <span>logo maker</span> </h2>
                            <h1>Make an incredible logo <br /> <span>in minutes</span> </h1>
                            <p>Pre-designed by top talent. Just add your touch.</p>
                            <button>Try Fiverr Logo Maker</button>
                        </div>
                        <div className='right'>
                            <img src="img/logomaker.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
