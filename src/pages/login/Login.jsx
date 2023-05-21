import { useState } from 'react';
import './login.scss'
import axios from 'axios';
<<<<<<< HEAD
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from '../../redux/userSlice';
import { axiosReq } from '../../../utils/axiosReq';

const Login = () => {
    const [input, setInput] = useState({});
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate()
=======
import { Link } from 'react-router-dom';

const Login = () => {
    const [input, setInput] = useState({});
    const [error, setError] = useState('')
>>>>>>> c740ce69a933f5574ea6d61e803b1cc218f998b1

    const handleChange = (e) => {
        setInput(p => ({...p, [e.target.name]: e.target.value}))
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
<<<<<<< HEAD
            dispatch(loginStart())
            const res = await axiosReq.post('/auth/login', {...input})
            dispatch(loginSuccess(res.data))
            setError('')
            navigate('/')
        } catch (error) {
            setError(error.response?.data)
            dispatch(loginFailure())
=======
            const res = await axios.post('/auth/login', {...input}, {withCredentials: true})
            console.log(res.data)
            setError('')
        } catch (error) {
            setError(error.response?.data)
>>>>>>> c740ce69a933f5574ea6d61e803b1cc218f998b1
        }
    }
    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
<<<<<<< HEAD
                <input onChange={handleChange} required name='username' type="text" placeholder='username' />
                <input onChange={handleChange} required name='password' type="password" placeholder='password' />
=======
                <input onChange={handleChange} name='username' type="text" placeholder='username' />
                <input onChange={handleChange} name='password' type="password" placeholder='password' />
>>>>>>> c740ce69a933f5574ea6d61e803b1cc218f998b1
                <button type='submit'>Login</button>
            </form>
            <Link className='reg' to='/register'>Register</Link>
            {error && <span>{error}</span>}
        </div>
    );
};

export default Login;