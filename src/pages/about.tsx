import { Container, Row, Col, Image } from 'react-bootstrap';
import asx2324 from '../assets/asx2324.jpg';
import { Card } from 'react-bootstrap';

interface ExecProps {
    name: string;
    bio: string;
    imageUrl: string;
}

const Exec = ({ name, bio, imageUrl }: ExecProps) => (
    <div className="exec__card">
        <Image src={imageUrl} roundedCircle className="exec__card-img"/>
        <div className="exec__card__textbox">
            <h5 className="exec__card-title">{name}</h5>
            <h6 className="exec__card-description">{bio}</h6>
        </div>
        
    </div>
);

export default function AboutPage() {
    const execs = [
        {
            name: 'Harlin Toor',
            bio: 'President',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            name: 'Zachary Klouchnikov',
            bio: 'Vice President',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            name: 'Amy Toms',
            bio: 'Secretary',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            name: 'Isabella Rivera',
            bio: 'Events Director',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            name: 'Sitthisak Diwansingh',
            bio: 'Symposium Director',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            name: 'Aleksandra Zhitkova',
            bio: 'Symposium Director',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            name: 'Hannah Semple',
            bio: 'Webmaster',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            name: 'Amy Miller',
            bio: 'Graphics Designer',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            name: 'Irene Haeun Hwang',
            bio: 'Photographer',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            name: 'York Hay Ng',
            bio: 'Outreach Director',
            imageUrl: 'https://via.placeholder.com/150'
        },
    ];
    return (
        <Container className="about">
            <div className="about__banner">
                <img src={asx2324} alt="ASX 23/24" className="about__banner--img" />
                <div className="about__banner--title-col">
                    <h5 className="about__banner--subheading">Our Mission</h5>
                    <h4 className="about__banner--mission">To educate, excite, and inspire students, professionals, and the general public about astronomy and space.</h4>
                </div>
            </div>
            <div className="about__description">
                <p>ASX is a non-profit organization run by the University of Toronto undergraduate space community.</p>
                <p>
                Since its inception in 2003, ASX has rapidly grown, organising numerous high-profile events with distinguished speakers, including astronauts, astronomers, and space entrepreneurs. ASX has also established partnerships with various organizations, including the Royal Astronomical Society of Canada, the Canadian Space Society, and the Canadian Space Agency.
                </p>
                <p>
                ASX is continuously seeking support from sponsors, new partnerships and collaborations, and distinguished speakers, in order to continue educating, exciting, and inspiring today’s society about astronomy and space exploration.
                </p>
                <h4>Want to join us?</h4>
                <p>If you are a University of Toronto undergraduate student and would like to become part of the team, you can run for any of the positions listed below (position responsibilities are outlined in our constitution). We hold elections for upcoming members near the end of the academic year, so come to our events and get to know us until then!</p>
            </div>
            <div className="main-button__wrapper">
                <a className="main-button" href="http://asx.sa.utoronto.ca/files/2022/08/ASX-Constitution-2022.pdf" target="_blank" rel="noopener noreferrer">Our Constitution</a>
            </div>
            <h1>Meet the Team</h1>
            <div className="exec__container">
                {execs.map((exec, index) => (
                        <Exec
                            key={index}
                            name={exec.name}
                            bio={exec.bio}
                            imageUrl={exec.imageUrl}
                        />
                ))}
            </div>
            
        </Container>
    )
}