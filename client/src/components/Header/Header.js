import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown, Row } from "react-bootstrap";
import { logout } from "../../actions/user";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <header>
      <Navbar className="pb-0" expand="sm">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="navbar-header"></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="flex-md-column"
          >
            <Nav className="ml-auto pb-0">
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="adminmenu">
                  <LinkContainer to="/user/listing">
                    <NavDropdown.Item>Add Listing</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <React.Fragment>
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <i className="fas fa-plus"></i> Create Account
                    </Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/login">
                    <Nav.Link>
                      <i className="fas fa-user"></i> Sign In
                    </Nav.Link>
                  </LinkContainer>
                </React.Fragment>
              )}
            </Nav>
            <Nav className="ml-auto pt-0">
              <LinkContainer to="">
                <Nav.Link className="">Explore Featured</Nav.Link>
              </LinkContainer>
              <LinkContainer to="">
                <Nav.Link>Special Offers</Nav.Link>
              </LinkContainer>
              <LinkContainer to="">
                <Nav.Link className="listing-btn">Post a Listing</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
