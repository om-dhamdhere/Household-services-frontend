import React from "react";
import axios from 'axios';
import "./Login.css";
import logo from "./logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Card, Container, Col, Row, Form } from "react-bootstrap";

class Signup extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state=
        {
            fname:"",
            lname:"",
            email:"",
            password:""
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
        axios.post('http://localhost:5000/users/add', this.state)
        .then(res => console.log(res.data))
        this.setState({fname:"", lname:"", email:"", password:""});
    }

    render()
    {
        return (
            <>
                <img src={logo} alt="logo" className="logo"/>
                <h1 className="login_heading">PT</h1>
                <Container className="mt-3">     
                <Row className="mx-auto justify-content-center">
                    <Col xs={4}>
                        <Card className="shadow-lg" variant="dark">
                            <Card.Header className="p-3" style={{backgroundColor:"rgb(33,37,41)"}}>
                                <h4 style={{color: 'white', backgroundColor: 'rgb(33,37,41)', alignItems:"center"}}>SignUp</h4>
                            </Card.Header>

                            <Card.Body>
                                <Form onSubmit={this.changeSubmit}>
                                <Form.Group className="mb-3" >
                                        <Form.Control type="name" name="fname" value={this.state.fname} onChange={this.changeHandler} placeholder="First Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" >
                                        <Form.Control type="name" name="lname" value={this.state.lname} onChange={this.changeHandler} placeholder="Last Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" >
                                        <Form.Control type="email" name="email" value={this.state.email} onChange={this.changeHandler} placeholder="Email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Control type="password" name="password" value={this.state.password} onChange={this.changeHandler} placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" style={{alignItems:"center"}} >
                                        <Button variant="dark" type="submit">Submit</Button>
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

export default Signup;