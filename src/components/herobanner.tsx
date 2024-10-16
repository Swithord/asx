import { Container } from 'react-bootstrap';

export default function HeroBanner() {
    return (
        <div className={"hero-banner pt-2"}>
            <Container>
                <h1><span className={"hero-banner__highlight"}>A</span>stronomy &</h1>
                <h1><span className={"hero-banner__highlight"}>S</span>pace E<span className={"hero-banner__highlight"}>x</span>ploration</h1>
                <h1>Association</h1>
                <h4 className={"hero-banner__description"}>UofT's astronomy outreach club</h4>
            </Container>
            
        </div>
    );
}