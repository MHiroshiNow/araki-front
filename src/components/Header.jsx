import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">第34回荒木杯</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Main</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/rule">Rule</Nav.Link>
                <Nav.Link href="/access">Access</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Header;
