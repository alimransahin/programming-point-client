import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { authContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const [error, setError] = useState(null);
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname||'/'
    const { popUpSignIn, emailSignIn } = useContext(authContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogle = () => {
        popUpSignIn(googleProvider)
            .then(result => {
                navigate(from,{replace:true})
            })
            .catch(error => console.error(error))
    }

    const handleGithub = () => {
        popUpSignIn(githubProvider)
            .then(result => {
                console.log(result.user);
                navigate(from,{replace:true})
            })
            .catch(error => console.error(error))
    }

    const handleEmailPassword = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        emailSignIn(email, password)
            .then(result => {
                setError('');
                navigate(from,{replace:true});
                form.reset();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div>
            <div className="row gap-3 justify-content-center">
                <Button onClick={handleGoogle} className='col-md-5 col-sm-12 p-3' variant="outline-success" size="lg">
                    <FaGoogle></FaGoogle>
                    <span> Log In by Google</span>
                </Button>
                <Button onClick={handleGithub} className='col-md-5 col-sm-12  p-3' variant="outline-secondary" size="lg">
                    <FaGithub></FaGithub>
                    <span> Log In by Github</span>
                </Button>
            </div>
            <Form className='my-4' onSubmit={handleEmailPassword}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                    <Form.Text className="text-danger">
                    {error}
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Log In
                </Button><br></br>
            <small className='text-muted'>If you have no account, Please <Link to='/signup'>Sign Up </Link> here. </small>
            </Form>
        </div>
    );
};

export default Login;