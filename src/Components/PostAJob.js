import React from "react";
import job3 from "./Images/job3.jpeg";
import { Link } from "react-router-dom";
function PostAJob() {
  return (
    <div className="container-fluid" style={{ marginTop: 85 }}>
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
        <h4 className="fw-bold">Job Informations</h4>
        <form>
          <div className="row g-3">
            <div className="col-lg-12">
              <input
                className="form-control"
                type="text"
                placeholder="Job Title"
                style={{ height: "50px" }}
              ></input>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="email"
                placeholder="Application email"
                style={{ height: "50px" }}
              ></input>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="text"
                placeholder="Job Location"
                style={{ height: "50px" }}
              ></input>
            </div>

            <div className="col-lg-6">
              <select className="form-control" style={{ height: "50px" }}>
                <option>Job Types</option>
                <option>Full Time</option>
                <option>Part Time</option>
              </select>
            </div>
            <div className="col-lg-6">
              <select className="form-control" style={{ height: "50px" }}>
                <option>Categories</option>
                <option>Full Time</option>
                <option>Part Time</option>
              </select>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="text"
                placeholder="Expected Salary"
                style={{ height: "50px" }}
              ></input>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="text"
                placeholder="Previous Experience"
                style={{ height: "50px" }}
              ></input>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="text"
                placeholder="Application Deadline"
                style={{ height: "50px" }}
              ></input>
            </div>
            <div className="col-lg-12">
              <textarea
                className="form-control"
                placeholder="Job Description"
                style={{ height: "150px" }}
              ></textarea>
            </div>
            <div className="col-lg-12">
              <textarea
                className="form-control"
                placeholder="Requirements"
                style={{ height: "150px" }}
              ></textarea>
            </div>
            <div className="col-lg-12">
              <textarea
                className="form-control"
                placeholder="Qualification"
                style={{ height: "150px" }}
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
                style={{ height: "50px" }}
              ></input>
            </div>
            <div className="col-lg-6">
              <input
                className="form-control"
                type="text"
                placeholder="Company Website"
                style={{ height: "50px" }}
              ></input>
            </div>
            <div className="col-lg-12">
              <textarea
                className="form-control"
                placeholder="Company Description"
                style={{ height: "150px" }}
              ></textarea>
            </div>
            <div className="col-lg-6 mb-3">
              <h5>Company Logo</h5>
              <input
                className="form-control border"
                type="file"
                // placeholder="Company Website"
                style={{ height: "50px" }}
              ></input>
            </div>
          </div>
          <button
            className="btn btn-success rounded-0"
            style={{ height: "50px", width: "150px" }}
          >
            Post A Job
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostAJob;
