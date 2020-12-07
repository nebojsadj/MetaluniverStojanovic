import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../pict/logo/MSlogo.png";

function Header({ lang }) {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img src={logo} alt="" className="mt-3" width="120%" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/" exact className="d-inline p-2 text-light nav">
              {lang.navPocetna}
            </NavLink>
            <NavLink to="/onama" className="d-inline p-2 text-light nav">
              {lang.navOnama}
            </NavLink>
            <NavLink to="/proizvodi" className="d-inline p-2 text-light nav">
              {lang.navProizvodi}
            </NavLink>
            <NavLink to="/kontakt" className="d-inline p-2 text-light nav">
              {lang.navKontakt}
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
