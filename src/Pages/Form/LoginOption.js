import React from 'react';
import Button from 'react-bootstrap/Button';
import { FaEnvelope, FaGithub, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const LoginOption = () => {
    return (
        <div className="d-grid gap-2">
            <Button variant="outline-success" size="lg">
                <FaGoogle></FaGoogle>
                <span> Log In by Google</span>
            </Button>
            <Button variant="outline-secondary" size="lg">
                <FaGithub></FaGithub>
                <span> Log In by Github</span>
            </Button>
            <Link to='/login' className="d-grid text-decoration-none">
                <Button variant="outline-primary" size="lg">

                    <FaEnvelope></FaEnvelope>
                    <span> Log In by Email & Password</span>

                </Button>
            </Link>
        </div>
    );
};

export default LoginOption;