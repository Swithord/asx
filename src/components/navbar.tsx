import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/asx_logo.jpg';

export default function ASXNavbar() {
    return (
        <Navbar bg="transparent" variant="dark" expand="lg" className={"px-4"}>
            <Navbar.Brand href="#home">
                <img src="https://asx.sa.utoronto.ca/files/2022/07/cropped-full_white_new.png" className={"logo"} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/events">Events</Nav.Link>
                    <Nav.Link href="/sponsor">Sponsorship</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}