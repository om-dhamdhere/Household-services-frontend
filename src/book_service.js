import React from "react";
import axios from 'axios';
import {Component} from "react";
import { Card, Container, Col, Row, Form } from "react-bootstrap";
import {Link} from 'react-router-dom';
class Booking extends Component
{
    constructor(props)
    {
        super(props);

        this.state=
        {
            fname:"", lname:"", email:"", date:"", service:""
        }
    }

    changeHandler=(e)=>
    {
        const key=e.target.name;
        const val=e.target.value
        this.setState({
            [key]:val
            })
    }

    changeSubmit=(e)=>
    {
        console.log(this.state);
        e.preventDefault();
        axios.post('http://localhost:5000/bookings/add', this.state)
        .then(res => console.log(res.data))
        this.setState({fname:"", lname:"", email:"", date:"", service:""});
    }

    loadScript=(src)=>{
    return new Promise((resolve)=>{
        const script=document.createElement("script")

        script.src=src
        script.onload=()=>{
            resolve(true)
        }

        script.onerror=()=>{
            resolve(false)
        }

        document.body.appendChild(script)

    })
}

        
            
           
        



   

    


   

   
    
    render()
    {
        return(
            <>
                <Container className="mt-3 pt-5" >     
                <Row className="mx-auto justify-content-center">
                    <Col xs={4}>
                        <Card className="shadow-lg" variant="dark">
                            <Card.Header className="p-3" style={{backgroundColor:"rgb(33,37,41)"}}>
                                <h3 style={{color: 'white', backgroundColor: 'rgb(33,37,41)', alignItems:"center"}}>Book Appointment</h3>
                            </Card.Header>

                            <Card.Body>
                                <Form onSubmit={this.changeSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" name="fname" value={this.state.fname} onChange={this.changeHandler} placeholder="First Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control type="text" name="lname" value={this.state.lname} onChange={this.changeHandler} placeholder="Last Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control type="email" name="email" value={this.state.email} onChange={this.changeHandler} placeholder="Email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control type="date" name="date" value={this.state.date} onChange={this.changeHandler} placeholder="Date" />
                                    </Form.Group>

                                    <Form.Select aria-label="Default select example" name="service" value={this.state.service} onChange={this.changeHandler}>
                                        <option>Available</option>
                                        <option value="1">Pradip Memane</option>
                                        <option value="2">Tanaya Daundkar</option>
                                        <option value="3">Akash Raskar</option>
                                    </Form.Select>
                                        <br/>
                                    <Form.Group className="mb-3" style={{alignItems:"center"}} >
                                        {/* <Button variant="dark" type="submit" size="lg">Book</Button> */}
                                        <Link to="/payments" style={{alignItems:"center", fontSize:20}} class="btn btn-dark">
                                            Book
                                        </Link>
                                    </Form.Group>                                   
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}

export default Booking;