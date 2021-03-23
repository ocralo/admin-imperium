import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

function NavberMenu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          src={`${process.env.PUBLIC_URL}/static/img/ImperiumLogo.png`}
          style={{ width: 33, height: 40 }}
          alt="imperium"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Button></Button>
          <Link to="/home">home</Link>
          {/* {AuthUser ? AuthUser.email : "unknown"}
          {!!AuthUser.email && (
            <Nav.Link eventKey={2} onClick={() => dispatch(fetchSignOut())}>
              Cerrar Sesion
            </Nav.Link>
          )} */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

NavberMenu.propTypes = {};

export default NavberMenu;
