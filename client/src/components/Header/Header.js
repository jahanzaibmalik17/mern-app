import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown, Row } from "react-bootstrap";
import { logout } from "../../actions/user";
import "./Header.css";
import signInImage from '../../images/Group-4675.png';
import signUpImage from '../../images/Group-4677.png'


const Header = (params) => {
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
                  <LinkContainer to="/admin/listing">
                    <NavDropdown.Item>Listing</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <React.Fragment>
                  <LinkContainer to="/register">
                    <Nav.Link className="header-nav-link">
                    <img src={signUpImage} alt=""/> Create Account
                    </Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/login">
                    <Nav.Link className="header-nav-link">
                      <img src={signInImage} alt=""/> Sign In
                    </Nav.Link>
                  </LinkContainer>
                </React.Fragment>
              )}
            </Nav>
            <Nav className="ml-auto pt-0">
              <LinkContainer to="/admin/addlisting">
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
