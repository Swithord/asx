import { Container, Row, Col } from 'react-bootstrap';
import asxlogo from '../assets/asx_logo.jpg';

export default function Footer() {

    return (
        <footer className="footer mt-5 p-4 text-center">
            <Container>
                <Row>
                    <Col md="auto" className="d-flex flex-column align-items-center justify-content-center">
                        <img src={asxlogo} alt="ASX Logo" className="footer__logo" style={{ width: 'auto', height: 'auto' }} />
                        <p></p>
                        <Row className="d-flex flex-column align-items-center justify-content-center">
                            <p>&copy; {new Date().getFullYear()} UTASX. All rights reserved.</p>

                        </Row>
                    </Col>
                    <Col md="auto">
                        <Row>
                            <h5>Stay updated</h5>
                        </Row>
                        <Row>
                            <a href="https://www.facebook.com/ASXAssoc" target="_blank" rel="noopener noreferrer" className="btn social-button">
                                Facebook
                            </a>
                        </Row>
                        <Row>
                            <a href="https://www.instagram.com/asx_uoft/" target="_blank" rel="noopener noreferrer" className="btn social-button">
                            Instagram
                            </a>
                        </Row>
                        <Row>
                            <a href="https://www.linkedin.com/company/asx-society/" target="_blank" rel="noopener noreferrer" className="btn social-button">
                            LinkedIn
                            </a>
                        </Row>
                        <Row>
                           <a href="https://www.youtube.com/@astronomyandspaceexplorati5753" target="_blank" rel="noopener noreferrer" className="btn social-button">
                            YouTube
                            </a> 
                        </Row>
                        
                    </Col>
                    <Col className="d-flex flex-column justify-content-between">
                        <Row>
                            <h5>Sign up and access our newsletter</h5>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScbjRnREhkQ-Mjv-mw8uGO5Jm03D7NjZTL_pEZQKMw2afP3Aw/viewform" target="_blank" rel="noopener noreferrer" className="btn social-button">
                            Membership Registration Form
                            </a>
                        </Row>
                        <Row>
                            <h6>21 Sussex Ave, Suite 427, Toronto, Ontario M5S 1J6, CA</h6>
                            <h6>space.association.utasx@gmail.com</h6>
                        </Row>
                        
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}