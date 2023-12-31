import React, { useState } from "react";
import job3 from "./Images/job3.jpeg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SignIn from "./SignIn";
import { Modal } from "react-bootstrap";
import tick from "./Images/tick.png";

// CSS Modules, react-datepicker-cssmodules.css//
// import "react-datepicker/dist/react-datepicker-cssmodules.css";
function PostAJob() {
  const navgate = useNavigate();
  const [jobTitle, setJobTitle] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [jobEmail, setJobEmail] = useState("");
  const [jobDes, setJobDes] = useState("");
  const [jobSalary, setJobSalary] = useState("");
  const [jobQualifi, setJobQualifi] = useState("");
  const [jobReq, setJobReq] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobCateg, setJobCateg] = useState("");
  const [jobExp, setJobExp] = useState("");
  const [deadline, setDeadline] = useState();
  const [compName, setCompName] = useState("");
  const [compWeb, setCompWeb] = useState("");
  const [compDes, setcompDes] = useState("");
  const [compLogo, setCompLogo] = useState("");
  const [vacany, setVacancy] = useState("");
  const [showSignIn, setShowSignIn] = useState(false);
  const [showPage, setShowPage] = useState(false);

  const handleJobPost = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/jobportal/api/job/categ/", {
        jobCategory: jobCateg,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    const formData = new FormData();
    formData.append("jobTitle", jobTitle);
    formData.append("jobLocation", jobLocation);
    formData.append("jobCategory", jobCateg);
    formData.append("jobDescription", jobDes);
    formData.append("jobRequirement", jobReq);
    formData.append("jobSalary", jobSalary);
    formData.append("deadline", deadline);
    formData.append("jobType", jobType);
    formData.append("applicationEmail", jobEmail);
    formData.append("previousExperience", jobExp);
    formData.append("Qaulification", jobQualifi);
    formData.append("companyName", compName);
    formData.append("companyWebsite", compWeb);
    formData.append("companyDescription", compDes);
    formData.append("companyLogo", compLogo);
    formData.append("vacancy", vacany);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    axios
      .post("http://127.0.0.1:5000/jobportal/api/post/job", formData)
      .then((res) => {
        console.log(res.data);
        // navgate("/");
        setShowPage(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container-fluid" style={{ marginTop: 84 }}>
      <Modal
        style={{
          zIndex: 1000000000,
          marginTop: "100px",
        }}
        className="modal"
        show={showPage}
        onHide={() => {
          setShowPage(false);
        }}
      >
        <Modal.Header>
          <Modal.Title>Job post sucessfully</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={tick} style={{ height: "260px", overflow: "none" }}></img>
          {/* <p>Thanks</p> */}
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-success"
            onClick={() => {
              setShowPage(false);
            }}
          >
            OK
          </button>
        </Modal.Footer>
      </Modal>
      <div
        className="row text-light"
        style={{
          marginTop: 85,
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
            data-aos-duration="1000"
            className="display-3 fw-bolder "
            style={{ fontSize: "70px" }}
          >
            Post Job
          </h1>
          <div className="d-flex">
            <Link className="nav-link">Home </Link> /
            <Link className="nav-link">About</Link> /
            <Link className="nav-link">Pages</Link>
          </div>
        </div>
      </div>
      {/* <h4>PostAJob</h4> */}
      <div className="container mb-5">
        {!localStorage.getItem("isLoggedIn") && (
          <div className="d-flex justify-content-center align-items-center mb-4  text-center p-2">
            <h4>Haven't you</h4>
            <Link
              className="d-inline-flex align-items-center btn bg-black text-light shadow-0 ms-3 ps-3 pe-4 pt-1"
              style={{ cursor: "default" }}
              // onClick={(e) => {
              //   setShowSignIn(true);
              // }}
            >
              <i className="bi bi-person fs-3 me-1"></i>
              Sign In first
            </Link>
            {/* <SignIn
              showSignIn={showSignIn}
              setShowSignIn={setShowSignIn}
            ></SignIn> */}
          </div>
        )}

        <h4 className="fw-bold">Job Informations</h4>
        <form onSubmit={handleJobPost}>
          <div className="row g-3">
            <div className="col-lg-12">
              <input
                className="form-control"
                type="text"
                placeholder="Job Title"
                style={{ height: "44px" }}
                value={jobTitle}
                onChange={(e) => {
                  setJobTitle(e.target.value);
                }}
              ></input>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="email"
                placeholder="Application email"
                style={{ height: "44px" }}
                value={jobEmail}
                onChange={(e) => {
                  setJobEmail(e.target.value);
                }}
              ></input>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="text"
                placeholder="Job Location"
                style={{ height: "44px" }}
                value={jobLocation}
                onChange={(e) => {
                  setJobLocation(e.target.value);
                }}
              ></input>
            </div>

            <div className="col-lg-6">
              <select
                className="form-control"
                style={{ height: "44px" }}
                value={jobType}
                onChange={(e) => {
                  setJobType(e.target.value);
                }}
              >
                <option>Job Types</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Temporary</option>
                <option>Internship</option>
              </select>
            </div>
            <div className="col-lg-6">
              <select
                className="form-control"
                style={{ height: "44px" }}
                value={jobCateg}
                onChange={(e) => {
                  setJobCateg(e.target.value);
                }}
              >
                <option>Categories</option>
                <option>IT Sector</option>
                <option>Engineering</option>
                <option>Human Resource</option>
                <option>Marketing</option>
                <option>Sales & Communication</option>
                <option>Teaching & Education</option>
                <option>Design & Creative</option>

                <option>R&D</option>
              </select>
            </div>
            <div className="col-lg-3">
              <input
                className="form-control"
                type="text"
                placeholder="Expected Salary"
                style={{ height: "44px" }}
                value={jobSalary}
                onChange={(e) => {
                  setJobSalary(e.target.value);
                }}
              ></input>
            </div>
            <div className="col-lg-3">
              <input
                className="form-control"
                type="text"
                placeholder="Previous Experience"
                style={{ height: "44px" }}
                value={jobExp}
                onChange={(e) => {
                  setJobExp(e.target.value);
                }}
              ></input>
            </div>
            <div className="col-lg-3">
              <ReactDatePicker
                className="form-control pt-2 pb-2 pe-5 ps-5"
                placeholderText="Application Deadline"
                selected={deadline}
                onChange={(date) => {
                  setDeadline(date);
                }}
                dateFormat={"dd/MM/yyyy"}
              ></ReactDatePicker>
              {/* <input
                className="form-control"
                type="text"
                placeholder="Application Deadline"
                style={{ height: "50px" }}
                value={deadline}
                onChange={(e) => {
                  setDeadline(e.target.value);
                }}
              ></input> */}
            </div>
            <div className="col-lg-3">
              <input
                className="form-control"
                min={0}
                type="number"
                placeholder="no of Vacancy"
                style={{ height: "44px" }}
                value={vacany}
                onChange={(e) => {
                  setVacancy(e.target.value);
                }}
              ></input>
            </div>
            <div className="col-lg-12">
              <textarea
                className="form-control"
                placeholder="Job Description"
                style={{ height: "150px" }}
                value={jobDes}
                onChange={(e) => {
                  setJobDes(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="col-lg-12">
              <textarea
                className="form-control"
                placeholder="Requirements"
                style={{ height: "150px" }}
                value={jobReq}
                onChange={(e) => {
                  setJobReq(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="col-lg-12">
              <textarea
                className="form-control"
                placeholder="Qualification"
                style={{ height: "150px" }}
                value={jobQualifi}
                onChange={(e) => {
                  setJobQualifi(e.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <div className="row mt-5 g-3">
            <h4 className="fw-bold">Company Informations</h4>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="text"
                placeholder="Company Name"
                style={{ height: "44px" }}
                value={compName}
                onChange={(e) => {
                  setCompName(e.target.value);
                }}
              ></input>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="text"
                placeholder="Company Website"
                style={{ height: "44px" }}
                value={compWeb}
                onChange={(e) => {
                  setCompWeb(e.target.value);
                }}
              ></input>
            </div>
            <div className="col-lg-12">
              <textarea
                className="form-control"
                placeholder="Company Description"
                style={{ height: "150px" }}
                value={compDes}
                onChange={(e) => {
                  setcompDes(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="col-lg-6 mb-3">
              <h5>Company Logo</h5>
              <input
                className="form-control border py-2"
                type="file"
                // placeholder="Company Website"
                style={{}}
                name="compLogo"
                // value={compLogo}
                onChange={(e) => {
                  setCompLogo(e.target.files[0]);
                }}
              ></input>
            </div>
          </div>
          {localStorage.getItem("isLoggedIn") ? (
            <input
              type="submit"
              value={"Post A Job"}
              className="btn btn-success rounded-0"
              style={{ height: "50px", width: "150px" }}
            ></input>
          ) : (
            <abbr
              title="Sign In first"
              className="d-flex btn shadow-0 border-0 bg-secondary justify-content-center text-center rounded-0 align-items-center"
              style={{
                height: "50px",
                width: "150px",
                cursor: "not-allowed",
                textDecoration: "none",
              }}
            >
              Post A Job
            </abbr>
          )}
        </form>
      </div>
    </div>
  );
}

export default PostAJob;
