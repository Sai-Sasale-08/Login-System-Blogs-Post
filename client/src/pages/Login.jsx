import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const navigate=useNavigate()
  const handlesubmit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:8080/user/login",{email,password},{withCredentials:true})
    .then((res)=>{
      alert(res.data.message)
      navigate("/")
  }).catch((err)=>{
      console.log(err)
  })
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <h2 className="text-center">Login</h2>
          <Form onSubmit={handlesubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                placeholder="Password"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4 w-100">
              Login
            </Button>
          </Form>
        </Col>
        <Link to={"/register"}><button style={{margin:"auto",marginBottom:"40px",marginTop:"40px",display:"flex",justifyContent:"center",alignItems:"center"}}>Signup</button></Link>
      </Row>
    </Container>
  );
};

export default Login;
