import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Sidebar = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h3 className='text-center fw-semibold mt-5'>Course List</h3>
                <div className="d-grid gap-2 ">
            {
                courses.map(course => <Link className="d-grid text-decoration-none" key={course.id} to={`course/${course.id}`} >
                    <Button variant="outline-success" size='lg'>
                        {course.title}
                    </Button>
                </Link>)
            }
        </div>
        </div>
    );
};

export default Sidebar;