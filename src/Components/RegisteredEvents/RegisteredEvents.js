import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const RegisteredEvents = (props) => {
    const {_id,title,date,description} = props.event
    
    const [eventList,setEventList] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/registeredEventsByUser`)
        .then((response) => response.json())
        .then((data) =>setEventList(data))
    },[eventList])

    const deleteEvent = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
        .then((response) => response.json())
        .then(result => {
            setEventList(result)
            console.log('deleted successfully')
        })
        console.log(id)
        
    }
    return (
        <div>
            <Card style={{ width: '18rem',display: 'inline-block',float: 'left',margin: '20px' }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick= {() => deleteEvent(_id)} variant="primary" >Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RegisteredEvents;