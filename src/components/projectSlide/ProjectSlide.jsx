import './projectSlide.scss'
import Slider from 'infinite-react-carousel';
import { projects } from '../../data';
import ProjectSlideCard from '../projectSlideCard/ProjectSlideCard';

const ProjectSlide = () => {
    return (
        <div className='pSlide'>
            <div className="container">
            <h1>Get inspired with projects made by our freelancers</h1>
                <Slider slidesToShow={4} arrowsScroll={4}>
                    {projects.map(data => <ProjectSlideCard item={data}/>)}
                </Slider>
            </div>
        </div>
    );
};

export default ProjectSlide;