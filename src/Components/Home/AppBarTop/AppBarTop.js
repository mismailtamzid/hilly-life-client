import React from 'react';
import { Button, Container, Form, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { BsShuffle, BsHeart, BsSearch } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";

const AppBarTop = () => {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">HillyLife</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <div className="p-1 bg-warning rounded-pill">
                  <InputGroup
                    className="p-2"
                    style={{ width: "700px" }}
                  >
                    <FormControl
                      placeholder="enter your search product..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      className="border-0 w-50"
                    ></FormControl>
                    <Form.Select className="border-0">
                      <option>all categories</option>
                      <option value="1">mobile parts</option>
                      <option value="2">electronics</option>
                      <option value="3">computers</option>
                    </Form.Select>
                    <div className=''>
                      <BsSearch />
                    </div>
                  </InputGroup>
                </div>
              </Nav>
              <Nav>
                <Nav.Link href="#home">
                  <div>
                    Call Us: <br />
                    01518455215
                  </div>
                </Nav.Link>
                <Nav.Link href="#home">
                  <div>
                    <BsShuffle />
                  </div>
                </Nav.Link>
                <Nav.Link href="#home">
                  <div>
                    <BsHeart />
                  </div>
                </Nav.Link>
                <Nav.Link href="#home">
                  <div>
                    <HiOutlineShoppingBag />$
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default AppBarTop;