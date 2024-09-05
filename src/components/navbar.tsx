import { Navbar, Nav } from 'react-bootstrap';

export default function ASXNavbar() {
    return (
        <Navbar bg="transparent" variant="dark" className={"px-4"}>
            <Navbar.Brand href="#home">ASX</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/news">News</Nav.Link>
                <Nav.Link href="/about">About Us</Nav.Link>
            </Nav>
        </Navbar>
    )
}