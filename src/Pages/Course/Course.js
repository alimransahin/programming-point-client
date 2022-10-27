import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { title, image, price, id, reviewe, duration } = course;
    return (
        <Col>
            <Link to={`course/${id}`} className="text-decoration-none text-dark">
                <Card>
                    <Card.Img variant="top" src={image} height='280px' />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className='d-flex justify-content-between md:flex-column'>
                            <p><span className='text-warning'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt/></span> {reviewe}</p>
                            <p>Duration: {duration}</p>
                        </Card.Text>
                        <h4>Price:{price}</h4>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
};

export default Course;