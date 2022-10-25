import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaLaptopCode } from 'react-icons/fa';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
            <Container>
                <Navbar.Brand className="fw-bold" href="#home">
                    <FaLaptopCode/>
                    <span> Programming-Point</span>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Courses</Nav.Link>
                        <Nav.Link href="#features">Blog</Nav.Link>
                        <Nav.Link href="#pricing">FAQ</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Sign In</Nav.Link>
                        <Nav.Link href="#deets">Sign Up</Nav.Link>
                        <Nav.Link href="#deets">Toggle</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;