import React from "react";
import { Nav, NavItem, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function Navvbar() {
  return (
    <div>
      <Navbar className="sticky-top p-0" bg="light" variant="" expand="lg md">
        <Navbar.Brand className="text-success fw-bolder fs-3 py-0 px-4 px-lg-5">
          Job Portal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-collapse"></Navbar.Toggle>
        <Navbar.Collapse id="nav-collapse">
          <Nav
            className="fw-bold navbar-nav  ms-auto p-4 p-lg-0"
            variant="underline"
          >
            <Nav.Item className="d-flex justify-content-center align-items-center">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item className="d-flex justify-content-center align-items-center">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </Nav.Item>
            <Nav.Item className="btn btn-success  fw-bolder text-light rounded-0 px-lg-5 py-4 d-none d-lg-block">
              <Link to="/" className="nav-link text-white">
                Post A Job <i className="fa fa-arrow-right ms-3"></i>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navvbar;
