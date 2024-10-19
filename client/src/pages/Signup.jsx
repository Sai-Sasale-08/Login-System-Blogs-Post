import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [name,setname]=useState("")
    const navigate=useNavigate()

    const handlesubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8080/user/register",{name,email,password},{withCredentials:true})
        .then((res)=>{
            alert(res.data.message)
            navigate("/otp")
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center">Register</h2>
          <Form onSubmit={handlesubmit}>
            <Form.Group controlId="formBasicName" className="mt-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e)=>setname(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="mt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4 w-100">
              Register
            </Button>
          </Form>
        </Col>
        <Link to={"/login"}><button style={{margin:"auto",marginBottom:"40px",marginTop:"40px",display:"flex",justifyContent:"center",alignItems:"center"}}>Login</button></Link>
      </Row>
    </Container>
  );
};

export default Signup;
