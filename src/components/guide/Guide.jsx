import './guide.scss';

const Guide = () => {
    return (
        <div className='guide'>
            <div className='container'>
                <h1>Fiverr guides</h1>
                <div className='top'>
                    <div className='content'>
                        <img src='img/guide1.webp' alt='' />
                        <h4>Start an online business and work from home</h4>
                        <p>
                            A complete guide to starting a small business online
                        </p>
                    </div>
                    <div className='content'>
                        <img src='img/guide2.webp' alt='' />
                        <h4>Digital marketing made easy</h4>
                        <p>
                            A practical guide to understand what is digital
                            marketing
                        </p>
                    </div>
                    <div className='content'>
                        <img src='img/guide3.webp' alt='' />
                        <h4>Create a logo for your business</h4>
                        <p>
                            A step-by-step guide to creat a memorable business
                            logo
                        </p>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='container'>
                        <div className='left'>
                            <h1>
                                Find the <span>talent</span>  needed to <br />
                                get your business <span>growing</span>.
                            </h1>
                            <button>Get Started</button>
                        </div>
                        <div className='right'>
                            <img src="img/guideman.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guide;
