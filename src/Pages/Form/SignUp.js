import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { authContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { emailSignUp } = useContext(authContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        emailSignUp(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => console.error(error))
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
                <Form.Control name='email' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
                <Form.Text className="text-danger">
                    We'll never share your email with anyone else.
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