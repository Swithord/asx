import { Container, Row, Col, CardGroup } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function StatisticsCard({ number, text }: { number: string; text: string }) {
    return (
        <Card className="aboutus__card">
            <Card.Body>
                <Card.Title className="aboutus__card-title">{number}</Card.Title>
                <Card.Text className="aboutus__card-description">{text}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default function AboutUs() {
    const statistics = [
        {
            number: '2003',
            text: 'Founded'
        },
        {
            number: '1200',
            text: 'Members'
        },
        {
            number: '10+',
            text: 'Events per year'
        },
        {
            number: '500',
            text: 'Symposium Attendees'
        }
    ];
    return (
        <Container className="aboutus">
            <h1>About Us</h1>
            <h5>We are a non-profit organisation run by University of Toronto undergraduate space community. Some stats about us:</h5>
            <div className="aboutus__card-group">
                {statistics.map((statistic, index) => (
                    <Col>
                        <StatisticsCard
                            key={index}
                            number={statistic.number}
                            text={statistic.text}
                        />
                    </Col>
                        
                ))}
            </div>
            
        </Container>);
}