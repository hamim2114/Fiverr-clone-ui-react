import './categorySlide.scss'
import Slider from 'infinite-react-carousel';
import { cards } from '../../data';
import CategorySlideCard from '../categorySlideCard/CategorySlideCard';

const Slide = () => {
    return (
        <div className='slide'>
            <div className="container">
                <h1>Popular professional services</h1>
                <Slider slidesToShow={5} arrowsScroll={5} >
                {cards.map((data, id) => <CategorySlideCard item={data} key={id}/>)}
                </Slider>
            </div>
        </div>
    );
};

export default Slide;