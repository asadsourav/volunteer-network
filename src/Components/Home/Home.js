import React, { useEffect, useState } from 'react';
import { Button, Card, FormControl, InputGroup } from 'react-bootstrap';
import Header from '../Header/Header';
import fakeData from '../../fakeData'
import Activity from '../Activity/Activity';

const activities = fakeData;

const Home = () => {

    const [newEvents, setNewEvents] = useState([])

    useEffect(() => {
        fetch('https://shrouded-meadow-25684.herokuapp.com/getNewEvents')
            .then(response => response.json())
            .then(data => {
                setNewEvents(data)
            })
    }, [newEvents])
    return (
        <div>
            <Header></Header>
            <h2 className='text-center'> <strong>I GROW BY HELPING PEOPLE IN NEED</strong></h2>
            <InputGroup className="m-3 w-25 mx-auto">
                <FormControl
                    placeholder="Search..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="primary">Search</Button>
                </InputGroup.Append>
            </InputGroup>

            {
                <div className="col-md-12 row border-right">
                    {activities.map(activity => <Activity key={activity.id} activity={activity} />)}
                </div>
            }

            {
                newEvents.map(event => 
                    <Card style={{ width: '18rem',display:'inline-block',float: 'left'}}>
                        <Card.Body>
                            <Card.Title>{event.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
                            <Card.Text>
                                {event.description}
                        </Card.Text>
                            <Card.Link href="#">Register</Card.Link>
                    
                        </Card.Body>
                    </Card>
                )
            }



        </div>
    );
};

export default Home;