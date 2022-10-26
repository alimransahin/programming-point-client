import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import { authContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(authContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="light">
            <Container>
                <Link to='/' className='text-decoration-none'><Navbar.Brand className="fw-bold" >

                    <img src={logo} alt="" style={{ height: '50px' }} />
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
                        {
                            user?.uid ?
                                <>
                                    <Link data-bs-toggle="tooltip" data-bs-placement="bottom" title={user?.displayName ? user?.displayName : 'No Name'} className='nav-link fw-semibold' to="/d">
                                        {
                                            user?.photoURL ?
                                                <img src={user?.photoURL} alt="" />
                                                :
                                                <FaUserAlt></FaUserAlt>
                                        }
                                    </Link>


                                    <Link className='nav-link fw-semibold' onClick={handleLogOut}>Log Out</Link>

                                </>
                                :
                                <>
                                    <Link className='nav-link fw-semibold' to="login">Log In</Link>
                                    <Link className='nav-link fw-semibold' to="signup">Sign Up</Link>
                                </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;