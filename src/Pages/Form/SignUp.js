import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const navigate = useNavigate()
    const { emailSignUp } = useContext(authContext);
    const [error, setError] = useState(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        emailSignUp(email, password)
            .then(result => {
                setError('');
                form.reset();
                navigate('/');
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <Form className='my-4' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter full name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>PhotoURL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Enter photoURL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required='required' />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                SignUp
            </Button>
            <p><small className='text-muted'>If you have already an account, Please <Link to='/login'>Log In </Link> here. </small></p>
        </Form>
    );
};

export default SignUp;