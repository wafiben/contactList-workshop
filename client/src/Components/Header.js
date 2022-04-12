import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
          HOME
        </Link>
        <Nav className="me-auto">
          <Link
            to="/add-user"
            style={{ textDecoration: "none", color: "white" }}
          >
            Add User
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
