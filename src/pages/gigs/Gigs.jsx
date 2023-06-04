import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GigCard from '../../components/gigCard/GigCard';
import './gigs.scss';
import { useQuery } from '@tanstack/react-query';
import { axiosReq } from '../../utils/axiosReq';

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState('sales');

  const { search } = useLocation();
  const searchKey = search.replace('?', '')

  const minRef = useRef();
  const maxRef = useRef();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['gigsData'],
    queryFn: () =>
      axiosReq
        .get(
          `/gigs?${searchKey}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`
        )
        .then((res) => res.data),
  });

  const reqSort = (type) => {
    setSort(type);
    setOpen(false);
  };
  useEffect(() => {
    refetch();
  }, [sort]);

  const handleSearch = () => {
    refetch();
  };

  return (
    <div className='gigs'>
      <div className='container'>
        <span className='breadcrumbs'>FIVER > GRAPHICS & DESIGN</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className='menu'>
          <div className='left'>
            <span>Budget</span>
            <input
              ref={minRef}
              type='text'
              placeholder='min'
            />
            <input
              ref={maxRef}
              type='text'
              placeholder='max'
            />
            <button onClick={handleSearch}>Apply</button>
          </div>
          <div className='right'>
            <span className='sortBy'>SortBy</span>
            <span className='sortType'>
              {sort === 'sales' ? 'Best Selling' : 'Newest'}
            </span>
            <img
              src='./img/down.png'
              alt=''
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className='rightMenu'>
                {sort === 'sales' ? (
                  <span onClick={() => reqSort('createdAt')}>Newest</span>
                ) : (
                  <span onClick={() => reqSort('sales')}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className='cards'>
          {isLoading
            ? 'Loading..'
            : error
            ? 'something went wrong!'
            : data.map((d) => (
                <GigCard
                  key={d._id}
                  item={d}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
