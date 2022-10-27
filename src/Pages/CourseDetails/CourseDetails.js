import Button from 'react-bootstrap/Button';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    const { image, details, title, duration, instructor, language, price, seats, id } = course;
    return (
        <div className='border border-info p-5'>
            <div className='text-center mb-5'>
                <h3 className='bg-dark text-light p-2 rounded'>{title}</h3>
                <img src={image} alt="" />
                <div className='mt-5'>
                    <Link to={`/checkout/${id}`}> <Button variant="primary" size="lg">
                        Enroll Now
                    </Button>
                    </Link>
                </div>

            </div>
            <div className='row'>
                <div className="col-md-8">
                    <p style={{ textAlign: 'justify' }}>{details}</p>
                </div>
                <div className="col-md-4">
                    <h4 className='fs-4'>Instructor: {instructor}</h4>
                    <h6 className='fs-4'>Language: {language}</h6>
                    <p className='fs-5'>Course Duration: {duration}</p>
                    <p className='fs-4'> Total Seats: {seats}</p>
                    <h2 className='text-primary'>Course Price: {price}</h2>
                    <Link to={`/checkout/${id}`}> <Button variant="primary" size="lg">
                        Enroll Now
                    </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;