import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    const { image, title, duration, instructor, language, price, seats, id } = course;
    return (
        <div className='border border-info p-5'>
            <div className='text-center mb-5'>
                <img src={image} className="img-fluid" alt="" />
                <h3 className='bg-dark text-light my-3 p-2 rounded'>{title}</h3>
                <h4 className='fs-4'>Instructor: {instructor}</h4>
                <h6 className='fs-4'>Language: {language}</h6>
                <p className='fs-5'>Course Duration: {duration}</p>
                <p className='fs-4'> Total Seats: {seats}</p>
                <h2 className='text-primary'>Course Price: {price}</h2>
                <Link to={`/checkout/${id}`}> <Button variant="primary" size="lg">
                    Buy Now
                </Button>
                </Link>
            </div>

        </div>
    );
};

export default Checkout;