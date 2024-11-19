import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
const HeaderSection = () => {
  return (
    <footer>
      <Navbar className="pb-0">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="navbar-footer"></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Row>
                <LinkContainer to="">
                  <Nav.Link className="">Terms of use</Nav.Link>
                </LinkContainer>
                <LinkContainer to="">
                  <Nav.Link>Legal notice</Nav.Link>
                </LinkContainer>
                <LinkContainer to="">
                  <Nav.Link>Cookies</Nav.Link>
                </LinkContainer>
                <LinkContainer to="">
                  <Nav.Link>Privacy policy</Nav.Link>
                </LinkContainer>
                <LinkContainer to="">
                  <Nav.Link>FAQ</Nav.Link>
                </LinkContainer>
              </Row>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar className="pt-0 nav-footer-2">
        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              © 2024, Inc. All rights reserved.
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </footer>
  );
};

export default HeaderSection;
