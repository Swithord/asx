import { Container } from 'react-bootstrap';
import HeroBanner from '../components/herobanner';
import AboutUs from '../components/aboutus';
import Latest from '../components/latest';
import Events from '../components/events';

export default function MainPage() {
    return (
        <div className={"main"}>
            <HeroBanner />
            <AboutUs />
            <Latest />
            <Events />
        </div>
    )
}