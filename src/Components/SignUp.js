import AOS from "aos";
import React, { useState, useEffect } from "react";
import job2 from "./Images/job2.jpeg";
import job3 from "./Images/job3.jpeg";
import { NavLink, Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import axios from "axios";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("candidate");
  const [phone, setPhone] = useState("");
  const [terms, setTerms] = useState(false);
  const handleSignUp = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/jobportal/api/add/user", {
        name: name,
        email: email,
        password: password,
        role: role,
        phone: phone,
        confirmPassword: confirmPassword,
        // terms_condition: terms,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container-fluid" style={{ marginTop: 85 }}>
      <div
        className="row text-light"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${job3})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "500px",
          position: "relative",
          marginBottom: "100px",
        }}
      >
        <div
          className="col-lg-8 position-absolute d-flex flex-column justify-content-center"
          style={{
            top: "30%",
            left: "12%",
            borderLeft: "20px solid #139c49",
            paddingLeft: "40px",
            paddingTop: "40px",
            paddingBottom: "40px",
            // borderTop: "20px solid",
          }}
        >
          <h1
            data-aos="fade-down"
            data-aos-delay="250"
            data-aos-offset="200"
            data-aos-duration="700"
            className="display-3 fw-bolder "
            style={{ fontSize: "70px" }}
          >
            Register
          </h1>
          <div className="d-flex">
            <Link className="nav-link">Home </Link> /
            <Link className="nav-link">About</Link> /
            <Link className="nav-link">Pages</Link>
          </div>
        </div>
      </div>
      {/* /////////// */}
      <div className="container mb-6">
        <h3 className="text-center">
          <span
          // className="border-bottom border-dark"
          >
            Create Your Account
          </span>
        </h3>
        <div className="row g-3 justify-content-center">
          {/* <h5 className="">Choose Your Account Type</h5> */}
          <div className="col-lg-8">
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
                  <NavLink
                    className={`nav-link ${
                      role == "candidate"
                        ? "text-success border-bottom border-success border-2"
                        : ""
                    }`}
                    onClick={(e) => {
                      setRole("candidate");
                    }}
                    style={{ borderBottom: "2px solid black", color: "black" }}
                  >
                    <div className="d-flex flex-row align-items-center">
                      <div>
                        <i className="bi bi-people fs-1 me-3"></i>
                      </div>
                      <div className="">
                        <h6 className="p-0 m-0">Candidate</h6>
                        <p className="p-0 m-0">I want to discover companies.</p>
                      </div>
                    </div>
                  </NavLink>
                </Nav.Item>
                <Nav.Item
                  className="nav-item border"
                  style={{ width: "48.8%" }}
                >
                  <NavLink
                    className={`nav-link  ${
                      role == "employer"
                        ? "text-success border-bottom border-success border-2"
                        : ""
                    }`}
                    onClick={(e) => {
                      setRole("employer");
                    }}
                    style={{ borderBottom: "2px solid black", color: "black" }}
                  >
                    <div className="d-flex flex-row align-items-center">
                      <div>
                        <i className="bi bi-bag fs-1 me-3"></i>
                      </div>
                      <div className="">
                        <h6 className="p-0 m-0">Employer</h6>
                        <p className="p-0 m-0">
                          I want to attract the best talent.
                        </p>
                      </div>
                    </div>
                  </NavLink>
                </Nav.Item>
              </Nav>
            </fieldset>

            <form onSubmit={handleSignUp}>
              <div className="row g-3 ">
                <div className="col-lg-6">
                  <label className=" text-secondary">Username *</label>
                  <input
                    placeholder=""
                    type="text"
                    className="form-control"
                    style={{ height: "50px" }}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="col-lg-6">
                  <label className=" text-secondary">Email Address *</label>
                  <input
                    placeholder=""
                    type="email"
                    className="form-control"
                    style={{ height: "50px" }}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="col-lg-6">
                  <label className=" text-secondary">Password *</label>
                  <input
                    placeholder=""
                    type="password"
                    className="form-control"
                    style={{ height: "50px" }}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="col-lg-6">
                  <label className=" text-secondary">Confirm Password *</label>
                  <input
                    placeholder=""
                    type="password"
                    className="form-control"
                    style={{ height: "50px" }}
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  ></input>
                </div>
                {confirmPassword != password ? (
                  <h6 className="text-danger">confirm password must be same</h6>
                ) : (
                  ""
                )}
                <div className="col-lg-12">
                  <label className=" text-secondary">Phone *</label>
                  <input
                    placeholder=""
                    type="tel"
                    className="form-control"
                    style={{ height: "50px" }}
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  ></input>
                </div>
                {/* <div className="col-lg-12">
                  <label className=" text-secondary">Select Sector *</label>
                  <select
                    placeholder=""
                    className="form-control"
                    style={{ height: "50px" }}
                  >
                    <option>Accountancy</option>
                    <option>Accountancy</option>
                    <option>Accountancy</option>
                    <option>Accountancy</option>
                  </select>
                </div> */}
                <div className="col-lg-12 fs-6">
                  <input
                    placeholder=""
                    type="checkbox"
                    className="me-2 text-success bg-success"
                    style={{ caretColor: "" }}
                    checked={terms}
                    onClick={(e) => {
                      setTerms(e.target.checked);
                    }}
                  ></input>
                  you accept our Terms and Conditions and Privacy Policy
                </div>
                {/* {terms == false ? (
                  <h6>please accept terms and conditions</h6>
                ) : (
                  ""
                )} */}
                {terms == true ? (
                  <div className="col-lg-6">
                    <input
                      className="btn form-control btn-success rounded-0"
                      type="submit"
                      value="Sign up"
                      style={{ height: "53px" }}
                    ></input>
                  </div>
                ) : (
                  <div className="col-lg-6">
                    <input
                      className="btn shadow-0 btn-dark text-center text-light form-control rounded-0"
                      value="SIGN UP"
                      style={{
                        height: "53px",
                        backgroundColor: "gray",
                        cursor: "not-allowed",
                      }}
                    ></input>
                  </div>
                )}

                <div className="col-lg-6 text-end">
                  <p className="p-0 m-0">
                    Already Registered?{" "}
                    <Link
                    // to="/signup"
                    // onClick={(e) => {
                    //   setShowSignIn(false);
                    // }}
                    >
                      Sign in here
                    </Link>
                  </p>
                </div>
              </div>
              {/* <div className="row g-3 mt-3 mb-5"> */}
              {/* <div className="col-lg-6">
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
                  // to="/signup"
                  // onClick={(e) => {
                  //   setShowSignIn(false);
                  // }}
                  >
                    Sign Up here
                  </Link>
                </p>
              </div> */}
              {/* </div> */}
            </form>
            <p className="ms-2 mb-2 mt-4 pb-0 fw-bold text-secondary">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
