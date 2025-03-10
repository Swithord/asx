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
            <div className="flex flex-col justify-center align-center">
                <div className='text-center'>This is a demo website.</div>
                <div className="main-button__wrapper">
                    <a href="https://asx.sa.utoronto.ca" target="_blank" rel="noopener noreferrer" className="main-button">Visit our Official Website</a>
                </div>
            </div>
            <Mission />
            <Latest />
            <Events />
            <AboutUs />
            <Speakers />
            <div className="main-button__wrapper">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScbjRnREhkQ-Mjv-mw8uGO5Jm03D7NjZTL_pEZQKMw2afP3Aw/viewform" target="_blank" rel="noopener noreferrer" className="main-button">Become a Member</a>
            </div>
            
        </div>
    )
}