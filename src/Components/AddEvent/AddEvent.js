import React from 'react';
import { Col, Form, ListGroup, Row } from 'react-bootstrap';
import userIcon from '../../logos/users-alt 1.png'
import plusIcon from '../../logos/plus 1.png'
import logo from '../../logos/Group 1329.png'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";

const AddEvent = () => {


    const {handleSubmit,register} = useForm();
    const onSubmit = (data) =>{
        fetch('https://shrouded-meadow-25684.herokuapp.com/addEvent', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
        .then(response => response.json()) 
        .then(data => {
            
            console.log('posted')
        })
        console.log(data)
    
    } 
    return (
        <div className='row'>
            <div className="col-md-3">
                <img style={{ margin: '0 auto', display: 'block' }} className='w-50' src={logo} alt="" />
                <br />
                <ListGroup as="ul">
                    <ListGroup.Item as="li" >
                    <Link style ={{ textDecoration: 'none',color: 'black' }} to="/registerList">
                        <img src={userIcon} alt="" />  Volunteer register lists
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item as="li" active > <img src={plusIcon} alt="" /> Add Events</ListGroup.Item>

                </ListGroup>
            </div>
            <div className="col-md-9 my-5">
                <h3>Add Events</h3>
                <br />
                <Form method = "POST" onSubmit={handleSubmit(onSubmit)} >
                    <Row>
                        <Col>
                            <h5>Event Title</h5>
                            <Form.Control name="title" ref={register} placeholder="Event title" />
                        </Col>
                        <Col>
                            <h5>Event date</h5>
                            <Form.Control name='name' type="date" ref={register} placeholder="Event date" />
                        </Col>

                    </Row>
                    <br/>
                    <Row>
                        <Col>
                            <h5>Description</h5>
                            <Form.Control name="description" size="lg" type="text" ref={register} placeholder="Description" />
                        </Col>

                        <Col>
                            <Form.Group className = "my-3">
                                <Form.File name="Upload Image" id="bannerPic" label="Banner" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <input className= 'btn btn-primary d-block ml-auto' type="submit" value="Submit"/>
                </Form>
            </div>
        </div>
    );
};

export default AddEvent;