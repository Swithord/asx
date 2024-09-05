import { Container } from 'react-bootstrap';

export default function MainPage() {
    return (
        <Container className={"mainpage"}>
            <Container className={"mainbanner pt-2"}>
                <h1>ASX</h1>
                <h4>UofT's astronomy outreach club</h4>
            </Container>
            <h2>Our Events</h2>
        </Container>
    )
}