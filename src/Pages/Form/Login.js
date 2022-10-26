import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa'

const Login = () => {
    return (
        <div>
        <div className="row gap-3 justify-content-center">
            <Button className='col-md-5 col-sm-12 p-3' variant="outline-success" size="lg">
                <FaGoogle></FaGoogle>
                <span> Log In by Google</span>
            </Button>
            <Button className='col-md-5 col-sm-12  p-3' variant="outline-secondary" size="lg">
                <FaGithub></FaGithub>
                <span> Log In by Github</span>
            </Button>
        </div>
        <Form className='my-4'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            <Form.Text className="text-danger">
                We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Log In
            </Button>
            <p><small className='text-muted'>If you have no account, Please <Link to='/signup'>Sign Up </Link> here. </small></p>
        </Form>
        </div>
    );
};

export default Login;