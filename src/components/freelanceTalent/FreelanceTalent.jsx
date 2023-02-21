import './freelanceTalent.scss';
import { BsFillPlayFill } from 'react-icons/bs';
import Modal from 'react-modal';
import { useState } from 'react';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '900px'
    },
};

const FreelanceTalent = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <div className='ftalent'>
            <div className='container'>
                <div className='left'>
                    <h1>
                        A whole world of freelance talent at your fingertips
                    </h1>
                    <div className='item'>
                        <div className='title'>
                            <img src='/public/img/check.png' alt='' />
                            <h3>The best for every budget</h3>
                        </div>
                        <p>
                            Find high-quality services at every price point. No
                            hourly rates, just project-based pricing.
                        </p>
                    </div>
                    <div className='item'>
                        <div className='title'>
                            <img src='/public/img/check.png' alt='' />
                            <h3>Quality work done quickly</h3>
                        </div>
                        <p>
                            Find the right freelancer to begin working on your
                            project within minutes.
                        </p>
                    </div>
                    <div className='item'>
                        <div className='title'>
                            <img src='/public/img/check.png' alt='' />
                            <h3>Protected payments, every time</h3>
                        </div>
                        <p>
                            Always know what you'll pay upfront. Your payment
                            isn't released until you approve the work.
                        </p>
                    </div>
                    <div className='item'>
                        <div className='title'>
                            <img src='/public/img/check.png' alt='' />
                            <h3>24/7 support</h3>
                        </div>
                        <p>
                            Questions? Our round-the-clock support team is
                            available to help anytime, anywhere.
                        </p>
                    </div>
                </div>
                <div className='right'>
                    <div
                        className='videosec'
                        onClick={() => setModalIsOpen(true)}>
                        <span>
                            <BsFillPlayFill className='icon' />
                        </span>
                        <img src='img/videoThumb.webp' alt='' />
                    </div>

                    <Modal
                        style={customStyles}
                        isOpen={modalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}>
                        <video style={{width: '900px'}} src='/public/video.mp4'  controls autoPlay></video>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default FreelanceTalent;
