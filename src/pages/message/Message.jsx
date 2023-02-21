import { Link } from 'react-router-dom';
import './message.scss'

const Messages = () => {
    return (
        <div className='msg'>
            <div className="container">
                <span className="breadcrumbs">
                    <Link to='/messages'>MESSAGES</Link> > JOHN DOE >
                </span>
                <div className="messages">
                    <div className="item">
                        <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/2515d88b0dc818b3a667eb9d005dd006-1673780921504/fb13ec8b-9da2-435f-9a9d-6b6d92864f36.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla fugit nihil! Natus eos quis sapiente tempora incidunt commodi? Est rerum doloribus distinctio doloremque, praesentium aperiam natus. Enim, perspiciatis aspernatur!</p>
                    </div>
                    <div className="item owner">
                        <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/2515d88b0dc818b3a667eb9d005dd006-1673780921504/fb13ec8b-9da2-435f-9a9d-6b6d92864f36.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla fugit nihil! Natus eos quis sapiente tempora incidunt commodi? Est rerum doloribus distinctio doloremque, praesentium aperiam natus. Enim, perspiciatis aspernatur!</p>
                    </div>
                    <div className="item owner">
                        <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/2515d88b0dc818b3a667eb9d005dd006-1673780921504/fb13ec8b-9da2-435f-9a9d-6b6d92864f36.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla fugit nihil! Natus eos quis sapiente tempora incidunt commodi? Est rerum doloribus distinctio doloremque, praesentium aperiam natus. Enim, perspiciatis aspernatur!</p>
                    </div>
                    <div className="item">
                        <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/2515d88b0dc818b3a667eb9d005dd006-1673780921504/fb13ec8b-9da2-435f-9a9d-6b6d92864f36.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla fugit nihil! Natus eos quis sapiente tempora incidunt commodi? Est rerum doloribus distinctio doloremque, praesentium aperiam natus. Enim, perspiciatis aspernatur!</p>
                    </div>
                    <div className="item owner">
                        <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/2515d88b0dc818b3a667eb9d005dd006-1673780921504/fb13ec8b-9da2-435f-9a9d-6b6d92864f36.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla fugit nihil! Natus eos quis sapiente tempora incidunt commodi? Est rerum doloribus distinctio doloremque, praesentium aperiam natus. Enim, perspiciatis aspernatur!</p>
                    </div>
                    <div className="item">
                        <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/2515d88b0dc818b3a667eb9d005dd006-1673780921504/fb13ec8b-9da2-435f-9a9d-6b6d92864f36.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla fugit nihil! Natus eos quis sapiente tempora incidunt commodi? Est rerum doloribus distinctio doloremque, praesentium aperiam natus. Enim, perspiciatis aspernatur!</p>
                    </div>
                    <div className="item">
                        <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/2515d88b0dc818b3a667eb9d005dd006-1673780921504/fb13ec8b-9da2-435f-9a9d-6b6d92864f36.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla fugit nihil! Natus eos quis sapiente tempora incidunt commodi? Est rerum doloribus distinctio doloremque, praesentium aperiam natus. Enim, perspiciatis aspernatur!</p>
                    </div>
                    <div className="item owner">
                        <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/2515d88b0dc818b3a667eb9d005dd006-1673780921504/fb13ec8b-9da2-435f-9a9d-6b6d92864f36.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nulla fugit nihil! Natus eos quis sapiente tempora incidunt commodi? Est rerum doloribus distinctio doloremque, praesentium aperiam natus. Enim, perspiciatis aspernatur!</p>
                    </div>
                </div>
                <hr />
                <div className="write">
                    <textarea placeholder='Write a message' cols="30" rows="10"></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Messages;