import { explore } from '../../data';
import './explore.scss';

const Explore = () => {
    const ExploreData = ({ data }) => {
        return (
            <div className='litem'>
                <img src={data.img} alt='' />
                <hr />
                <span>{data.title}</span>
            </div>
        );
    };
    return (
        <div className='explore'>
            <div className='container'>
                <div className='items'>
                    <h1>Explore the marketplace</h1>
                    
                    <div className='list'>
                        {explore.map((data) => (
                            <ExploreData data={data} key={data.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;
