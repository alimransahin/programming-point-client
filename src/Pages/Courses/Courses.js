import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import Row from 'react-bootstrap/Row';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h3 className='text-center fw-semibold mt-5'>Our Popular Courses</h3>
            <Row xs={1} md={2} className="g-4">
            {
                courses.map(course=><Course key={course.id} course={course}></Course>)
            }
            </Row>
        </div>
    );
};

export default Courses;