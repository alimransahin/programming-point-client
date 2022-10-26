import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center'>
            <h1 >
                404 Page Not Found
            </h1>
            <h3>Go to <Link to='/'>Home Page</Link> </h3>
        </div>
    );
};

export default Error;