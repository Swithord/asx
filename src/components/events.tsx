import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import obs from '../assets/obs.jpg';
import startalk from '../assets/startalk.jpg';
import symposium from '../assets/symposium.png';

interface EventCardProps {
    image: string;
    title: string;
    description: string;
}

const EventCard = ({ image, title, description }: EventCardProps) => (
    <Card className="events__card bg-dark">
        <Card.Img src={image} alt="Card image" className="events__card__img" />
        <Card.ImgOverlay className="events__card__overlay">
            <Card.Title className="events__card__title">{title}</Card.Title>
            <Card.Text className="events__card__description">{description}</Card.Text>
        </Card.ImgOverlay>
    </Card>
);

export default function Events() {
    const events = [
        {
            image: symposium,
            title: 'Symposium',
            description: 'Description'
        },
        {
            image: obs,
            title: 'Observation Night',
            description: 'Description'
        },
        {
            image: startalk,
            title: 'StarTalk',
            description: 'Description'
        }
    ];
    return (
        <Container className="events">
            <h1>Events</h1>
            <div className="events__carousel">
              {events.map((event, index) => (
                <EventCard
                    key={index}
                    image={event.image}
                    title={event.title}
                    description={event.description}
                />
                ))}
            </div>
            
        </Container>
    )
}