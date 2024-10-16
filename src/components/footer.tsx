import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {

    return (
        <footer className="footer mt-5 p-4 text-center">
            <Container>
                <Row>
                    <h6>Stay updated on our events</h6>
                </Row>
                <Row>
                    <Col>
                        <a href="https://www.facebook.com/ASXAssoc" target="_blank" rel="noopener noreferrer" className="btn m-1 social-button">
                            Facebook
                        </a>
                        <a href="https://www.instagram.com/asx_uoft/" target="_blank" rel="noopener noreferrer" className="btn m-1 social-button">
                            Instagram
                        </a>
                        <a href="https://www.linkedin.com/company/asx-society/" target="_blank" rel="noopener noreferrer" className="btn m-1 social-button">
                            LinkedIn
                        </a>
                        <a href="https://www.youtube.com/@astronomyandspaceexplorati5753" target="_blank" rel="noopener noreferrer" className="btn m-1 social-button">
                            YouTube
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>&copy; {new Date().getFullYear()} UTASX. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}