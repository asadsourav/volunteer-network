import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Activity = (props) => {
    const {id, title,image} = props.activity;
    return (
        <div className="col-md-3 mb-5 ">
            <Link to = {`/activity/${title}`} >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {image} />
                <Card.Body>
                    <Card.Title className= 'text-center'>{title}</Card.Title>
                   
                    
                </Card.Body>
            </Card>
            </Link>
           

        </div>
    );
};

export default Activity;