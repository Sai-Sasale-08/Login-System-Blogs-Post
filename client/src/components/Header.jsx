import axios from "axios";
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const NavigationBar = () => {

  const navigate=useNavigate()
  const handleclick = () => {
    axios.get("http://localhost:8080/user/logout",{withCredentials:true})
    .then((res)=>{
      alert(res.data.message)
      navigate("/login")
  }).catch((err)=>{
      console.log(err)
  })
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Blogs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/createblog">Create Blog</Nav.Link>
            <Nav.Link href="/getblog">Blogs</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
            <Button variant="primary" className="ms-2">
              <Link style={{ color: "black",textDecoration:"none" }} to={"/login"}>
                Login
              </Link>
            </Button>
            <Button variant="danger" onClick={handleclick} className="ms-2">
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
