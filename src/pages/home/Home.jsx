import './home.scss'
import CategorySlide from '../../components/categorySlide/CategorySlide';
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import FreelanceTalent from '../../components/freelanceTalent/FreelanceTalent';
import BusinessSolution from '../../components/businessSolution/BusinessSolution';
import ProjectSlide from '../../components/projectSlide/ProjectSlide';
import Explore from '../../components/explore/Explore';
import Reviews from '../../components/reviews/Reviews';
import Guide from '../../components/guide/Guide';

const Home = () => {
    return (
        <div>
            <Featured/>
            <TrustedBy/>
            <CategorySlide/>
            <FreelanceTalent/>
            <Explore/>
            <BusinessSolution/>
            <Reviews/>
            <ProjectSlide/>
            <Guide/>
        </div>
    );
};

export default Home;