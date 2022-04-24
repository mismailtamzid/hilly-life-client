import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BsCurrencyEuro } from "react-icons/bs";

const WelcomeBar = () => {
    return (
      // <div style={{ backgroundColor: "#253237", color: "white" }}>
      //   {" "}
      //   <div className="d-flex justify-content-between align-items-center container">
      //     <div>Welcome you to HillyLife store!</div>
      //       <ul type="none" className="d-flex">
      //         <li className="me-4">Setting</li>
      //         <li className="me-4">USD $</li>
      //         <li className="me-4">English</li>
      //       </ul>
      //     </div>
      //   </div>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className='fs-6'>
            Welcome you to HillyLife store!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Setting" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  My Account
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Checkout</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Sign In</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="USD $" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  EUR <BsCurrencyEuro />
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">USD $</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Language" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  English
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Bangla</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Arabic</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default WelcomeBar;