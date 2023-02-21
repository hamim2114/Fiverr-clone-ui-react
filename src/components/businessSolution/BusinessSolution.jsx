import './businessSolution.scss'

const BusinessSolution = () => {
    return (
        <div className='bSolution'>
            <div className="container">
                <div className="left">
                    <h2>fiverr <span> business.</span> <button>NEW</button></h2>
                    <h1>A business solution <br /> designed for <i>teams</i> </h1>
                    <p>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
                        <div className="item">
                            <img src="/public/img/check.png" alt="" />
                            <h3>Connect to freelancers with proven business experience</h3>
                        </div>   
                        <div className="item">
                            <img src="/public/img/check.png" alt="" />
                            <h3>Get matched with the perfect talent by a customer success manager</h3>
                        </div>   
                        <div className="item">
                            <img src="/public/img/check.png" alt="" />
                            <h3>Manage teamwork and boost productivity with one powerful workspace</h3>
                        </div>
                        <button>Explore Fiver Business</button>
                </div>
                <div className="right">
                    <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default BusinessSolution;