import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png'
import RegisteredEvents from '../RegisteredEvents/RegisteredEvents';

const EventTasks = () => {
    const [registeredEvents, setRegisteredEvents] = useState([])

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    useEffect(() => {
        fetch('https://shrouded-meadow-25684.herokuapp.com/registeredEventsByUser?email=' + loggedInUser.email)
        .then((response) => response.json())
        .then(data =>{
            setRegisteredEvents(data)
            console.log(data)
        })
    },[])
    return (
        <div>
            <img style={{ margin: '0 auto', display: 'block' }} className='w-25 ' src={logo} alt="" />
            {
                registeredEvents.map(event => <RegisteredEvents event={event} ></RegisteredEvents> )
            }

            
            
        </div>
    );
};

export default EventTasks;