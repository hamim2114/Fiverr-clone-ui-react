import { Link } from 'react-router-dom';
import './projectSlideCard.scss'

const ProjectSlideCard = ({item}) => {
    return (
        <Link to='' className='link'>
        <div className='projectSlideCard'>
           <div className="container">
            <img src={item.img} alt="" />
                <div className="info">
                    <img src={item.pp} alt="" />
                    <div className="text">
                        <h2>{item.cat}</h2>
                        <span>{item.username}</span>
                    </div>
                </div>
           </div>
        </div>
        </Link>
    );
};

export default ProjectSlideCard;