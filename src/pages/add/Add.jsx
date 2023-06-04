import { useSelector } from 'react-redux';
import { useReducer, useState } from 'react';
import { upload } from '../../utils/upload';
import './add.scss';
import { axiosReq } from '../../utils/axiosReq';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const { user } = useSelector(state => state.user);

  const [coverImg, setCoverImg] = useState(undefined);
  const [files, setFiles] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const INITIAL_STATE = {
    userId: user._id,
    title: '',
    desc: '',
    cat: '',
    price: 0,
    cover: '',
    images: [],
    shortTitle: '',
    shortDesc: '',
    deliveryTime: 0,
    revisionNumber: 0,
    features: []
  }

  const reducers = (state, action) => {
    switch (action.type) {
      case 'CHANGE_INPUT':
        return {
          ...state,
          [action.payload.name]: action.payload.value
        };
      case 'ADD_IMAGES':
        return {
          ...state,
          cover: action.payload.cover,
          images: action.payload.images
        };
      case 'ADD_FEATURE':
        return {
          ...state,
          features: [...state.features, action.payload]
        };
      case 'REMOVE_FEATURE':
        return {
          ...state,
          features: state.features.filter(feature => feature !== action.payload)
        }
      default: return state
    }
  };

  const [state, dispatch] = useReducer(reducers, INITIAL_STATE);
  console.log(state);

  const handleChange = (e) => {
    dispatch({ type: 'CHANGE_INPUT', payload: { name: e.target.name, value: e.target.value } })
  };
  const handleFeatured = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_FEATURE', payload: e.target[0].value.toUpperCase() });
    e.target[0].value = ''
  };

  const navigate = useNavigate()
  const handleUpload = async () => {
    setLoading(true);
    try {
      const cover = await upload(coverImg);
      const img = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file)
          return url
        })
      );
      dispatch({ type: 'ADD_IMAGES', payload: { cover, images: img } });
      axiosReq.post('/gigs', {...state, cover, images: img});
      setLoading(false);
      navigate('/myGigs')
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className='add'>
      <div className="container">
        <h1>AddNew Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input name='title' onChange={handleChange} type="text" placeholder='e.g. I will do something i"m really good at' />
            <label htmlFor="">Category</label>
            <select onChange={handleChange} name="cat" id="category">
              <option value="design">Design</option>
              <option value="web">web development</option>
              <option value="animation">Animation</option>
              <option value="graphic">Graphic art</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" onChange={e => setCoverImg(e.target.files[0])} />
            <label htmlFor="">Upload Image</label>
            <input type="file" multiple onChange={e => setFiles(e.target.files)} />
            <label htmlFor="">Description</label>
            <textarea name='desc' onChange={handleChange} placeholder='Brief description to introduce your service to cumstomers' />
            <button onClick={handleUpload}>{loading ? 'Loading..' : 'Creat'}</button>
          </div>
          <div className="right">
            <label htmlFor="">Service Title</label>
            <input name='shortTitle' onChange={handleChange} type="text" placeholder='e.g. One-page web design' />
            <label htmlFor="">Short Description</label>
            <textarea name="shortDesc" onChange={handleChange} placeholder='Short description of your service' />
            <label htmlFor="">Delivery Time(e.g. 3days)</label>
            <input type='number' name='deliveryTime' onChange={handleChange} min={1} />
            <label htmlFor="">Add Features</label>
            <form onSubmit={handleFeatured}>
              <input type="text" placeholder='e.g. page design' />
              <button type='submit'>add</button>
              {state.features.map(f => (
                <span key={f} style={{ cursor: 'pointer', border: '1px solid gray', padding: '0px 10px', borderRadius: '5px', margin: '5px' }} onClick={() => dispatch({ type: 'REMOVE_FEATURE', payload: f })}>{f} <span style={{ color: 'red' }}>X</span> </span>
              ))}
            </form>
            <label htmlFor="">Price</label>
            <input type='number' name='price' onChange={handleChange} type="number" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;