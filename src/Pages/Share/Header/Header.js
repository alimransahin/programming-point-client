import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
            <Container>
                <Link to='/' className='text-decoration-none'><Navbar.Brand className="fw-bold" >
                    
                    <img src={logo} alt="" style={{height:'50px'}} />
                    <span> Programming-Point</span>
                    
                    </Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='nav-link fw-semibold' to="/">Courses</Link>
                        <Link className='nav-link fw-semibold' to="/blog">Blog</Link>
                        <Link className='nav-link fw-semibold' to="/faq">FAQ</Link>
                    </Nav>
                    <Nav>
                        <Link className='nav-link fw-semibold' to="login">Log In</Link>
                        <Link className='nav-link fw-semibold' to="signup">Sign Up</Link>
                        <Link className='nav-link fw-semibold' to="#deets">Toggle</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;