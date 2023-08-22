import React from "react";
import { Dropdown, Nav, NavDropdown, NavItem, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import JobDetail from "./HomeComp/JobDetail";
import SignIn from "./SignIn";
import { useState } from "react";
import SignOut from "./SignOut";
import { useEffect } from "react";
import axios from "axios";

function Navvbar() {
  let jobList = "jobs";
  let jobCateg = "categ";
  let testimonial = "test";
  let jobDetail = "detail";
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignOut, setShowSignOut] = useState(false);
  // const [userData, setUserData] = useState("")
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [showUserData, setShowUserData] = useState({});

  return (
    <div>
      <Navbar
        className=" p-lg-0 fixed-top p-md-4"
        style={{ zIndex: 100000 }}
        bg="light"
        variant=""
        expand="lg md"
      >
        <Navbar.Brand className="text-success fw-bolder fs-3 py-0 px-4 px-lg-5">
          Job Portal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-collapse"></Navbar.Toggle>
        <Navbar.Collapse id="nav-collapse">
          <Nav
            closebutton
            className="fw-bold navbar-nav ms-auto p-4 p-lg-0"
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
            <NavDropdown
              title="Jobs"
              id="nav-dropdown"
              className="d-flex justify-content-center align-items-center"
            >
              <NavDropdown.Item
                style={{ borderRadius: "10px", textAlign: "start" }}
              >
                <Link to={`/joblist/${jobList}`} className="nav-link">
                  Job List
                </Link>
              </NavDropdown.Item>
              {/* <NavDropdown.Item style={{ borderRadius: "10px" }}>
                <Link to={`/jobdetail/${jobDetail}`} className="nav-link">
                  Job Detail
                </Link>
              </NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown
              title="Pages"
              id="nav-dropdown"
              className="d-flex justify-content-center align-items-center rounded"
            >
              <NavDropdown.Item style={{ borderRadius: "10px" }}>
                <Link to={`/jobcategory/${jobCateg}`} className="nav-link">
                  Job Category
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item style={{ borderRadius: "10px" }}>
                <Link to={`/testimonial/${testimonial}`} className="nav-link">
                  Testimonial
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item className="d-flex justify-content-center  align-items-center fw-medium">
              {localStorage.getItem("isLoggedIn") ? (
                <Link
                  className="nav-link"
                  onClick={(e) => {
                    setShowSignOut(true);
                    axios
                      .get(
                        `http://127.0.0.1:5000/jobportal/api/get/user/${localStorage.getItem(
                          "userId"
                        )}`
                      )
                      .then((res) => {
                        console.log(res.data.data);
                        setShowUserData(res.data.data);
                      })
                      .catch((err) => {
                        console.error(err);
                      });
                  }}
                >
                  <i className="bi bi-person fs-5 text-success me-2"></i>
                  Log out
                </Link>
              ) : (
                <Link
                  className="nav-link"
                  onClick={(e) => {
                    setShowSignIn(true);
                  }}
                >
                  <i className="bi bi-person fs-5 fw-bolder text-success me-2"></i>
                  Sign in
                </Link>
              )}
              {/* <Link
                className="nav-link"
                onClick={(e) => {
                  setShowSignIn(true);
                }}
              >
                <i className="bi bi-person fs-5 text-success me-2"></i>
                Sign in
              </Link> */}
            </Nav.Item>
            <Nav.Item className="btn btn-success fw-bolder text-light rounded-0 px-lg-5 py-4 d-none d-lg-block">
              {localStorage.getItem("role") == "candidate" ? (
                <Link
                  to={`/joblist/${jobList}`}
                  className="nav-link text-white"
                >
                  Go for Job <i className="fa fa-arrow-right ms-3"></i>
                </Link>
              ) : (
                <Link to="/postjob" className="nav-link text-white">
                  Post A Job <i className="fa fa-arrow-right ms-3"></i>
                </Link>
              )}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <SignOut
        showSignOut={showSignOut}
        setShowSignOut={setShowSignOut}
        showUserData={showUserData}
      ></SignOut>
      <SignIn showSignIn={showSignIn} setShowSignIn={setShowSignIn}></SignIn>
    </div>
  );
}

export default Navvbar;
