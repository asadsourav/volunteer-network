import React, { useEffect, useState } from 'react';
import { ListGroup, Table } from 'react-bootstrap';
import logo from '../../logos/Group 1329.png'
import userIcon from '../../logos/users-alt 1.png'
import plusIcon from '../../logos/plus 1.png'
import trashedIcon from '../../logos/trash-2 9.png'
import { Link } from 'react-router-dom';
const RegisterList = () => {

    const deleteEvent = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
        .then((response) => response.json())
        .then(result => {
            console.log('deleted successfully')})
        console.log(id)
        
    }

    const [eventList,setEventList] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allRegisteredEvents')
        .then(response => response.json())
        .then(data =>setEventList(data))
    },[eventList])
    return (
        <div className="row my-3">
            <div className="col-md-3">
                <img style={{ margin: '0 auto', display: 'block' }} className='w-50' src={logo} alt="" />
                <br />
                <ListGroup as="ul">
                    <ListGroup.Item as="li" active>
                        <Link style ={{ textDecoration: 'none',color: 'white' }} to="/registerList">
                        <img src={userIcon} alt="" />  Volunteer register lists
                        </Link>
                    </ListGroup.Item>
                        <Link style ={{ textDecoration: 'none',color: 'black' }} to="/addEvent">
                    <ListGroup.Item as="li"> <img src={plusIcon} alt="" /> Add Events</ListGroup.Item>
                        </Link>
                </ListGroup>
            </div>
            <div className="col-md-9">
                <h4>Volunteer register lists</h4>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email Id</th>
                            <th>Registration Date</th>
                            <th>Volunteer lists</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                    {
                                eventList.map(event => <tr>
                                <td> {event.name} </td>
                                <td>{event.email}</td>
                                <td>{event.date}</td>
                                <td>{event.title}</td>
                                <td> <button onClick={() => deleteEvent(event._id)} style={{border:'none', background:'none'}} > <img  className = "bg-danger rounded d-block mx-auto w-25"src={trashedIcon} alt=""/> </button> </td>
    
                                </tr> )
                            }
                       
                        
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default RegisterList;