import { Container, Image } from 'react-bootstrap';
import Slider from "react-slick";

interface SpeakerProps {
    name: string;
    bio: string;
    imageUrl: string;
}

const Speaker = ({ name, bio, imageUrl }: SpeakerProps) => (
    <div className="speaker__card">
        <Image src={imageUrl} roundedCircle className="speaker__card-img"/>
        <div className="speaker__card__textbox">
            <h5 className="speaker__card-title">{name}</h5>
            <h6 className="speaker__card-description">{bio}</h6>
        </div>
        
    </div>
);

export default function Speakers() {
    const speakers = [
        {
            name: 'Chris A. Hadfield',
            bio: 'Canadian Astronaut',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            name: 'Michael E. Brown',
            bio: 'Astronomer',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            name: 'Darlene Lim',
            bio: 'NASA Geobiologist and Exobiologist',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            name: 'Robert D. Richards',
            bio: 'Space Entrepreneur',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            name: 'Jaymie M. Matthews',
            bio: 'Astrophysicist',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            name: 'Robert Zubrin',
            bio: 'Aerospace Engineer',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            name: 'Sara Seager',
            bio: 'Planetary Scientist',
            imageUrl: 'https://via.placeholder.com/150'
        },
        {
            name: 'Jeffrey A. Hoffman',
            bio: 'Astronaut',
            imageUrl: 'https://via.placeholder.com/150'
        }
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return (
        <Container className="speaker">
            <h1>Past Speakers</h1>
            {/* {speakers.map
                ((speaker, index) => (
                    <Speaker
                    
                        key={index}
                        name={speaker.name}
                        bio={speaker.bio}
                        imageUrl={speaker.imageUrl}
                    />
                ))} */}
            <div className="speaker__container">
                {speakers.map((speaker, index) => (
                    <Speaker
                        key={index}
                        name={speaker.name}
                        bio={speaker.bio}
                        imageUrl={speaker.imageUrl}
                    />
                ))}
            </div>
            
        </Container>
    );
}