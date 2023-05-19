import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.scss'

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [active2, setActive2] = useState(false);
    const [open, setOpen] = useState(false);

    const {pathname} = useLocation();

    window.onscroll = () => {
        setActive(window.pageYOffset === 0 ? false : true);
        setActive2(window.pageYOffset < 200 ? false : true);
        return () => (window.onscroll = null);
    };

    const currentUser = {
        id: 1,
        username: 'Mr Alex',
        isSeller: true
    }

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
                    <Link className='link' to='/login'><span>Sign in</span></Link>
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button className={active ? 'active' : ''}>Join</button>}
                    {currentUser && (
                        <div className="user" onClick={()=>setOpen(!open)}>
                            <img src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1" alt="" />
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
                                <span>Logout</span>
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