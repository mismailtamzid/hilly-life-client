import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const AppBar = () => {
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="warning"
          variant="light"
          className="fw-bold"
        >
          <Container>
            <Navbar.Brand href="#home">All Categories</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <NavDropdown title="Auto Parts" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Engine Parts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Engine Fiting
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Cables</NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.4">
                    Car Mirrors
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Engine Systems"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Engine Parts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Engine Fiting
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Cables</NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.4">
                    Car Mirrors
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Body Systems" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Engine Parts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Engine Fiting
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Cables</NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.4">
                    Car Mirrors
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/contact">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default AppBar;