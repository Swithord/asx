import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/asx_logo.jpg';

export default function ASXNavbar() {
    return (
        <Navbar bg="transparent" variant="dark" className={"px-4"}>
            {/* <Navbar.Brand href="#home">
                <img src={logo} className={"logo"} />
                ASX
                </Navbar.Brand> */}
            <Navbar.Brand href="#home">
                <img src="https://asx.sa.utoronto.ca/files/2022/07/cropped-full_white_new.png" className={"logo"} />
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/events">Events</Nav.Link>
                <Nav.Link href="/sponsor">Sponsorship</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav>
        </Navbar>
    )
}