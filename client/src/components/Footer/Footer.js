import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Container, Row } from "react-bootstrap";
// import headerImage from "../../images/brown-horse-pasture-mountains-morning-1.png";
const HeaderSection = () => {
  return (
    <Navbar>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="navbar-header"></Navbar.Brand>
        </LinkContainer>
        <Navbar.Collapse>
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
  );
};

export default HeaderSection;
