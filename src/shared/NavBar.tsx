import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar variant="dark" expand="md">
      <Navbar.Brand as={NavLink} to="/" activeClassName="active">Compact ledger</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-md-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link as={NavLink} to="/home" activeClassName="active">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/setting" activeClassName="active">Settings</Nav.Link>
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
          </NavDropdown>
          {/* <Nav.Link href="#" disabled>
            Link
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;