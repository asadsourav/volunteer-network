import React, { useContext } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png'
import { useHistory } from "react-router-dom";
const Register = () => {
    let history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
     const {title} = useParams();
 const {handleSubmit,register} = useForm();
    const onSubmit = (data) =>{
        fetch('https://shrouded-meadow-25684.herokuapp.com/addRegistration', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
        .then(response => response.json()) 
        .then(data => {
            history.push('/eventTasks')
            console.log('posted')})
            .catch(error => console.log(error))
        // console.log(data)
    
    } 

   

    return (
        <div>
            <img style={{ margin: '0 auto', display: 'block' }} className='w-25 ' src={logo} alt="" />
            <div style={{ width: '570px', height: '457px', border: '2px solid #ABABAB' }} className=" container rounded text-center my-5">
                <Form   onSubmit={handleSubmit(onSubmit)} >
                    <Form.Group as={Row} controlId="formPlaintextFullName">
                        <Form.Label column sm="2">
                            Full name
                         </Form.Label>
                        <Col sm="10">
                            <Form.Control name="name" ref={register} className="border border-secondary rounded text-center my-3" plaintext readOnly defaultValue={loggedInUser.name} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            UserName or Email
                         </Form.Label>
                        <Col sm="10">
                            <Form.Control name="email" ref={register} className="border border-secondary rounded text-center my-3" plaintext readOnly defaultValue= {loggedInUser.email} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextDate">
                        <Form.Label column sm="2">
                            Date
                          </Form.Label>
                        <Col sm="10">
                            <Form.Control name="date" ref={register} type="date" placeholder="date" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextDescription">
                        <Form.Label column sm="2">
                            Description
                          </Form.Label>
                        <Col sm="10">
                            <Form.Control name="description" ref={register} type="text" placeholder="describe" />
                        </Col>
                    </Form.Group>

                    <Form.Group  as={Row} controlId="formPlaintextActivity">
                        <Form.Label  column sm="2">
                            Activity
                         </Form.Label>
                        <Col sm="10">
                            <Form.Control name="title" ref={register} className="border border-secondary rounded text-center" plaintext readOnly defaultValue= {title} />
                        </Col>
                    </Form.Group>
                    <br/>
                        
                    <input formTarget='_blank' className="btn btn-primary" type="submit" value="Registration"/>
                        
                </Form>
            </div>

        </div>
    );
};

export default Register;