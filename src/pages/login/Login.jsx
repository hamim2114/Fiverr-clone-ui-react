import { useState } from 'react';
import './login.scss'
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from '../../redux/userSlice';
import { axiosReq } from '../../utils/axiosReq';

const Login = () => {
    const [input, setInput] = useState({});
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleChange = (e) => {
        setInput(p => ({...p, [e.target.name]: e.target.value}))
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            dispatch(loginStart())
            const res = await axiosReq.post('/auth/login', {...input})
            dispatch(loginSuccess(res.data))
            setError('')
            navigate('/')
        } catch (error) {
            setError(error.response?.data)
            dispatch(loginFailure())
        }
    }
    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} required name='username' type="text" placeholder='username' />
                <input onChange={handleChange} required name='password' type="password" placeholder='password' />
                <button type='submit'>Login</button>
            </form>
            <Link className='reg' to='/register'>Register</Link>
            {error && <span>{error}</span>}
        </div>
    );
};

export default Login;