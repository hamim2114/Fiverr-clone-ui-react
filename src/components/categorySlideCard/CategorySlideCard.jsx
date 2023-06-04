import { Link } from 'react-router-dom';
import './categorySlideCard.scss'

const CategorySlideCard = ({item}) => {
    return (
        <Link to='/gigs'>
        <div className='catSlideCard'>
            <img src={item.img} alt="" />
            <span className="desc">{item.desc}</span>
            <span className="title">{item.title}</span>
        </div>
        </Link>
    );
};

export default CategorySlideCard;