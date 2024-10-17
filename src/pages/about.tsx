import { Container, Row, Col } from 'react-bootstrap';
import asx2324 from '../assets/asx2324.jpg';
import { Card } from 'react-bootstrap';

export default function AboutPage() {
    return (
        <Container>
            <div className="about__banner">
                <img src={asx2324} alt="ASX 23/24" className="about__banner--img" />
                <div className="about__banner--title-col">
                <h5 className="about__banner--subheading">Our Mission</h5>
                    <h4 className="about__banner--mission">To educate, excite, and inspire students, professionals, and the general public about astronomy and space.</h4>
                </div>
            </div>
            <div className="about__description">
                <p>
                Since its inception in 2003, ASX has rapidly grown to over 1200 members, and has organized and hosted 10 or more events per year, attracting hundreds of event attendees each year. ASX’s signature event is the Annual Symposium, which has attracted an audience of up to 500 people in a single event. Other events include the “Star Talk” Lecture Series, Panel Discussions, Observing Nights, and Science Competitions. Topics of discussion have covered various facets of space, such as ‘Mars: The Quest for Human Habitat’, ‘Life: Not As We Know It’, ‘Cosmology from the Stratosphere’, and ‘Space Business’.
                </p>
                <p>
                ASX is continuously seeking support from sponsors, new partnerships and collaborations, and distinguished speakers, in order to continue educating, exciting, and inspiring today’s society about astronomy and space exploration.
                </p>
            </div>
            
            
        </Container>
    )
}