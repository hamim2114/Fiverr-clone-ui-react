import { useState } from 'react';
import GigCard from '../../components/gigCard/GigCard';
import { gigs } from '../../data';
import './gigs.scss';

const Gigs = () => {
    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState('sales');

    const reqSort = (type) => {
        setSort(type)
        setOpen(false)
    }

    return (
        <div className='gigs'>
            <div className='container'>
                <span className='breadcrumbs'>FIVER > GRAPHICS & DESIGN</span>
                <h1>AI Artists</h1>
                <p>
                    Explore the boundaries of art and technology with Fiverr's
                    AI artists
                </p>
                <div className='menu'>
                    <div className='left'>
                        <span>Budget</span>
                        <input type='text' placeholder='min' />
                        <input type='text' placeholder='max' />
                        <button>Apply</button>
                    </div>
                    <div className='right'>
                        <span className='sortBy'>SortBy</span>
                        <span className='sortType'>{sort === 'sales' ? 'Best Selling' : 'Newest'}</span>
                        <img
                            src='./img/down.png'
                            alt=''
                            onClick={() => setOpen(!open)}
                        />
                        {open && (
                            <div className='rightMenu'>
                                {sort === 'sales' ? <span onClick={() => reqSort('createdAt')}>Newest</span> :
                                <span onClick={() => reqSort('sales')}>Best Selling</span>}
                            </div>
                        )}
                    </div>
                </div>
                <div className="cards">
                    {gigs.map(data => <GigCard key={data.key} item={data}/>)}
                </div>
            </div>
        </div>
    );
};

export default Gigs;
