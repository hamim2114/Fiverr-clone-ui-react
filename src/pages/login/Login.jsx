import { useState } from 'react';
import './login.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
    const [input, setInput] = useState({});
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setInput(p => ({...p, [e.target.name]: e.target.value}))
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const res = await axios.post('/auth/login', {...input}, {withCredentials: true})
            console.log(res.data)
            setError('')
        } catch (error) {
            setError(error.response?.data)
        }
    }
    return (
        <div className='login'>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name='username' type="text" placeholder='username' />
                <input onChange={handleChange} name='password' type="password" placeholder='password' />
                <button type='submit'>Login</button>
            </form>
            <Link className='reg' to='/register'>Register</Link>
            {error && <span>{error}</span>}
        </div>
    );
};

export default Login;