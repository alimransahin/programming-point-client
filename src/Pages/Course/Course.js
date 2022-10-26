import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const Course = ({ course }) => {
    const { title, image,price }=course;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} height='280px' />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.{console.log(course)}
                    </Card.Text>
                    <h4>Price:{price}</h4>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;