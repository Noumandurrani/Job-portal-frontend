import React, { useEffect, useState } from "react";
import { Modal, Nav } from "react-bootstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
function SignIn({ showSignIn, setShowSignIn }) {
  //   const [show, setShow] = useState(true);
  const navgate = useNavigate();
  const handleClose = (e) => {
    setShowSignIn(false);
  };
  return (
    <div
    // className="container-xxl" style={{ marginTop: 85 }}
    >
      <Modal
        // tabIndex="-1"
        style={{
          zIndex: 100000000,
        }}
        className="modal-lg"
        show={showSignIn}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title className="fs-5">Login to Your Account</Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          <fieldset>
            <legend
              className="fw-medium ms-2 text-secondary"
              style={{ fontSize: "15px" }}
            >
              Choose your Account Type
            </legend>
            <Nav className="nav d-flex mb-4">
              <Nav.Item
                className="nav-item border me-3 "
                style={{ width: "48.8%" }}
              >
                <NavLink className="nav-link border text-dark">
                  <div className="d-flex flex-row align-items-center">
                    <div>
                      <i className="bi bi-people fs-1 me-3"></i>
                    </div>
                    <div className="">
                      <h6 className="p-0 m-0">Candidate</h6>
                      <p className="p-0 m-0">Log in as Candidate</p>
                    </div>
                  </div>
                </NavLink>
              </Nav.Item>
              <Nav.Item className="nav-item border" style={{ width: "48.8%" }}>
                <NavLink className="nav-link  text-dark">
                  <div className="d-flex flex-row align-items-center">
                    <div>
                      <i className="bi bi-bag fs-1 me-3"></i>
                    </div>
                    <div className="">
                      <h6 className="p-0 m-0">Employer</h6>
                      <p className="p-0 m-0">Log in as Employer</p>
                    </div>
                  </div>
                </NavLink>
              </Nav.Item>
            </Nav>
          </fieldset>
          <form>
            <div className="col-lg-12">
              <label className=" text-secondary">Email Address:</label>
              <input
                placeholder=""
                type="email"
                className="form-control"
                style={{ height: "50px" }}
              ></input>
            </div>
            <div className="col-lg-12 mt-3">
              <label className=" text-secondary">Password*</label>
              <input
                placeholder=""
                type="password"
                className="form-control"
                style={{ height: "50px" }}
              ></input>
            </div>
            <div className="row g-3 mt-3 mb-5">
              <div className="col-lg-6">
                <input
                  className="btn form-control btn-success rounded-0"
                  type="submit"
                  value="Sign in"
                  style={{ height: "53px" }}
                ></input>
              </div>
              <div className="col-lg-6">
                <a className="p-0 m-0" href="#">
                  Forgot Password?
                </a>
                <p className="p-0 m-0">
                  Dont have account?{" "}
                  <Link
                    to="/signup"
                    onClick={(e) => {
                      setShowSignIn(false);
                    }}
                  >
                    Sign Up here
                  </Link>
                </p>
              </div>
            </div>
          </form>
          {/* <div className=""></div> */}
          <p className="ms-2 mb-1 pb-0 fw-bold text-secondary">
            Login or Sign up with
          </p>
          <div className="row g-3 mb-3">
            <div className="col-lg-6">
              <button
                className="btn form-control rounded-0 text-light"
                style={{ height: "53px", backgroundColor: "#3664a2" }}
              >
                <i className="bi bi-facebook fs-6 me-3"></i>
                LOgin with facebook
              </button>
            </div>
            <div className="col-lg-6">
              <button
                className="btn form-control btn-success rounded-0"
                style={{ height: "53px", backgroundColor: "#1D9BF0" }}
              >
                <i className="bi bi-twitter fs-6 me-3"></i>
                LOgin with Twitter
              </button>
            </div>
            <div className="col-lg-6">
              <button
                className="btn form-control btn-success rounded-0"
                style={{ height: "53px", backgroundColor: "#DB4437" }}
              >
                <i className="bi bi-google fs-6 me-3"></i>
                LOgin with Google
              </button>
            </div>{" "}
            <div className="col-lg-6">
              <button
                className="btn form-control btn-success rounded-0"
                style={{ height: "53px", backgroundColor: "#0e76a8" }}
              >
                <i className="bi bi-linkedin fs-6 me-3"></i>
                LOgin with LinkedIn
              </button>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <button className="btn">Save</button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default SignIn;
