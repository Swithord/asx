import { Container } from 'react-bootstrap';
import HeroBanner from '../components/herobanner';
import Mission from '../components/mission';
import Latest from '../components/latest';
import Events from '../components/events';
import AboutUs from '../components/aboutus';
import Speakers from '../components/speakers';

export default function MainPage() {
    return (
        <div className={"main"}>
            <HeroBanner />
            <Mission />
            <Latest />
            <Events />
            <AboutUs />
            <Speakers />
            <div className="main__join-button__wrapper">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScbjRnREhkQ-Mjv-mw8uGO5Jm03D7NjZTL_pEZQKMw2afP3Aw/viewform" target="_blank" rel="noopener noreferrer" className="main__join-button">Become a Member</a>
            </div>
            
        </div>
    )
}