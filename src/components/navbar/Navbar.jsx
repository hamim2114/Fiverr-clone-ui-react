import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import './navbar.scss'
import { logout } from '../../redux/userSlice';
import axios from 'axios';

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [active2, setActive2] = useState(false);
    const [open, setOpen] = useState(false);

    const {user: currentUser} = useSelector(state => state.user)
  console.log(currentUser)
    const {pathname} = useLocation();
    const dispatch = useDispatch();

    const handleLogout = async () => {
      dispatch(logout())
      try {
        const res = await axios.post('/auth/logout')
        console.log(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    window.onscroll = () => {
        setActive(window.pageYOffset === 0 ? false : true);
        setActive2(window.pageYOffset < 200 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className={active || pathname !=='/' ? 'navbar active' : 'navbar'}>
            <div className="container">
                <div className="logo">
                    <Link to='/' className='link'>
                    <span className="text">fiverr</span>
                    </Link>
                    <span className="dot">.</span>
                </div>
                {active2 && <div className="search">
                  <input type="text" placeholder='What Service are you looking for Today?' />
                 <img src="img/search.png" alt="" />
                </div>}
                <div className="links">
                    <span>Fiver Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>$ USD</span>
<<<<<<< HEAD
                    {!currentUser && <Link className='link' to='/login'><span>Sign in</span></Link>}
=======
                    <Link className='link' to='/login'><span>Sign in</span></Link>
>>>>>>> c740ce69a933f5574ea6d61e803b1cc218f998b1
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <Link to='/register'><button className={active ? 'active' : ''}>Join</button></Link>}
                    {currentUser && (
                        <div className="user" onClick={()=>setOpen(!open)}>
                            <img src={currentUser.img || '/img/noavatar.jpg'} alt="" />
                            <span>{currentUser?.username}</span>
                            {open && <div className="option">
                                {currentUser?.isSeller && (
                                    <>
                                        <Link to='/myGigs' className='link'>Gigs</Link>
                                        <Link to='/add' className='link'>Add New Gig</Link>
                                    </>
                                )}
                                <Link to='/orders' className='link'>Orders</Link>
                                <Link to='/messages' className='link'>Messages</Link>
                                <span onClick={handleLogout}>Logout</span>
                            </div>}
                        </div>
                    )}
                </div>
            </div>
            {(active2 ) && 
            <>
            <hr />
            <div className="menu">
                  <div className="menuItem">
                  <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="link menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink" to="/">
              AI Services
            </Link>
            <Link className="link menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink" to="/">
              Business
            </Link>
            <Link className="link menuLink" to="/">
              Lifestyle
            </Link>
                  </div>
            </div>
            </>}
        </div>
    );
};

export default Navbar;