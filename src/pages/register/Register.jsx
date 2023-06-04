import React, { useState } from "react";
import "./Register.scss";
import { upload } from "../../utils/upload";
import { axiosReq } from "../../utils/axiosReq";
import {useNavigate} from 'react-router-dom'


const Register = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    img: '',
    country: '',
    phone: '',
    desc: '',
    isSeller: false
  });
  console.log(input)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInput(p => ({...p, [e.target.name]: e.target.value}))
  }
  const handleSeller = (e) => {
    setInput(p => ({...p, isSeller: e.target.checked}))
    console.log(e.target.cheked)
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    setLoading(true)
    const url = await upload(file)
    try {
      const res = await axiosReq.post('/auth/register', {...input, img: url});
      console.log(res.data)
      setLoading(false)
      navigate('/login')
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create a new account</h1>
          <label htmlFor="">Username</label>
          <input
            required
            name="username"
            type="text"
            placeholder="johndoe"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            required
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input required name="password" type="password" onChange={handleChange} />
          <label htmlFor="">Profile Picture</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <label htmlFor="">Country</label>
          <input
            required
            name="country"
            type="text"
            placeholder="USA"
            onChange={handleChange}
          />
          <button type="submit">{loading ? 'Loading..' : 'Register'}</button>
        </div>
        <div className="right">
          <h1>I want to become a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Phone Number</label>
          <input
            name="phone"
            type="text"
            placeholder="+1 234 567 89"
            onChange={handleChange}
          />
          <label htmlFor="">Description</label>
          <textarea
            placeholder="A short description of yourself"
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
}

export default Register;
