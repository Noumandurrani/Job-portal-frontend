import React from "react";
import job3 from "../Images/job3.jpeg";
import job2 from "../Images/job2.jpeg";

import { Link, useParams } from "react-router-dom";
function JobDetail() {
  return (
    <div className="container-xxl bg-white" style={{ marginTop: 85 }}>
      {/* <h3>JobDetail</h3> */}
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
          <h1 className="display-3 fw-bolder " style={{ fontSize: "70px" }}>
            Job Detail
          </h1>
          <div className="d-flex">
            <Link className="nav-link">Home </Link> /
            <Link className="nav-link">About</Link> /
            <Link className="nav-link">Pages</Link>
          </div>
        </div>
      </div>
      {/* ////////////////////////// */}
      <div className="container">
        <div className="row gy-5 gx-4">
          <div className="col-lg-8">
            <div className="col-lg-12 d-flex flex-row mb-4">
              <div className="">
                <img src={job2} style={{ width: "70px", height: "70px" }}></img>
              </div>
              <div className="mx-4" style={{}}>
                <h3>Software Engineer</h3>
                <div className="d-flex flex-row align-items-center fw-medium">
                  <div className="d-flex flex-row me-3">
                    <i className="bi bi-geo-alt-fill me-1 text-success"></i>
                    <p>New York, USA</p>
                  </div>
                  <div className="d-flex flex-row me-3">
                    <i class="bi bi-stopwatch me-1 text-success"></i>
                    <p>Full Time</p>
                  </div>
                  <div className="d-flex flex-row align-items-start justify-content-center">
                    <i class="bi bi-cash me-1 fs-5 d-flex pt-1 text-success fw-bolder"></i>
                    <p className="d-flex">$123 - $300</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ////////// */}
            <div className="mb-4">
              <h4 className="fw-bolder">Job Description</h4>
              <p>
                Dolor justo tempor duo ipsum accusam rebum gubergren erat. Elitr
                stet dolor vero clita labore gubergren. Kasd sed ipsum elitr
                clita rebum ut sea diam tempor. Sadipscing nonumy vero labore
                invidunt dolor sed, eirmod dolore amet aliquyam consetetur
                lorem, amet elitr clita et sed consetetur dolore accusam. Vero
                kasd nonumy justo rebum stet. Ipsum amet sed lorem sea magna.
                Rebum vero dolores dolores elitr vero dolores magna, stet sea
                sadipscing stet et. Est voluptua et sanctus at sanctus erat vero
                sed sed, amet duo no diam clita rebum duo, accusam tempor
                takimata clita stet nonumy rebum est invidunt stet, dolor.
              </p>
            </div>
            <div className="mb-4">
              <h4 className="fw-bolder">Responsibility</h4>
              <p>
                Magna et elitr diam sed lorem. Diam diam stet erat no est est.
                Accusam sed lorem stet voluptua sit sit at stet consetetur,
                takimata at diam kasd gubergren elitr dolor
              </p>
              <div className="d-flex flex-row">
                <i className="bi bi-caret-right-fill text-success fw-bolder fs-6 me-2 "></i>
                <p className="m-0">Dolor justo tempor duo ipsum accusam</p>
              </div>
              <div className="d-flex flex-row">
                <i className="bi bi-caret-right-fill text-success fw-bolder fs-6 me-2 "></i>
                <p className="m-0">Dolor justo tempor duo ipsum accusam</p>
              </div>{" "}
              <div className="d-flex flex-row">
                <i className="bi bi-caret-right-fill text-success fw-bolder fs-6 me-2 "></i>
                <p className="">Dolor justo tempor duo ipsum accusam</p>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="fw-bolder"> Qualifications</h4>
              <p>
                Magna et elitr diam sed lorem. Diam diam stet erat no est est.
                Accusam sed lorem stet voluptua sit sit at stet consetetur,
                takimata at diam kasd gubergren elitr dolor
              </p>
              <div className="d-flex flex-row">
                <i className="bi bi-caret-right-fill text-success fw-bolder fs-6 me-2 "></i>
                <p className="m-0">Dolor justo tempor duo ipsum accusam</p>
              </div>
              <div className="d-flex flex-row">
                <i className="bi bi-caret-right-fill text-success fw-bolder fs-6 me-2 "></i>
                <p className="m-0">Dolor justo tempor duo ipsum accusam</p>
              </div>{" "}
              <div className="d-flex flex-row">
                <i className="bi bi-caret-right-fill text-success fw-bolder fs-6 me-2 "></i>
                <p className="m-0">Dolor justo tempor duo ipsum accusam</p>
              </div>
              <div className="d-flex flex-row">
                <i className="bi bi-caret-right-fill text-success fw-bolder fs-6 me-2 "></i>
                <p className=""> Rebum vero dolores dolores elitr</p>
              </div>
            </div>
            {/* ////////////////// */}
            <div className="mb-5">
              <h4 className="mb-4 fw-bolder">Apply For The Job</h4>
              <form className="">
                <div className="row g-3">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Portfolio Website"
                    ></input>
                  </div>{" "}
                  <div className="col-lg-6">
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Your Name"
                    ></input>
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      className="form-control"
                      placeholder="Cover Letter"
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    <button className="btn btn-success form-control">
                      Apply Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="p-5 mb-4 rounded"
              style={{ backgroundColor: "#effdf5" }}
            >
              <h4 className="mb-4 fw-bolder">Job Summary</h4>
              <p>
                <i className="fa fa-angle-right me-2 fw-bolder text-success"></i>
                Published On: 01 Jan, 2045
              </p>
              <p>
                <i className="fa fa-angle-right me-2 fw-bolder text-success"></i>
                Vacancy: 123 Position
              </p>
              <p>
                <i className="fa fa-angle-right me-2 fw-bolder text-success"></i>
                Job Nature: Full Time
              </p>
              <p>
                <i className="fa fa-angle-right me-2 fw-bolder text-success"></i>
                Salary: $123 - $456
              </p>
              <p>
                <i className="fa fa-angle-right me-2 fw-bolder text-success"></i>
                Location: New York, USA
              </p>
              <p>
                <i className="fa fa-angle-right me-2 fw-bolder text-success"></i>
                Date Line: 01 Jan, 2045
              </p>
            </div>
            <div
              className="p-5 mb-4 rounded"
              style={{ backgroundColor: "#effdf5" }}
            >
              <h4 className="mb-4 fw-bolder">Company Detail</h4>
              <p>
                Ipsum dolor ipsum accusam stet et et diam dolores, sed rebum
                sadipscing elitr vero dolores. Lorem dolore elitr justo et no
                gubergren sadipscing, ipsum et takimata aliquyam et rebum est
                ipsum lorem diam. Et lorem magna eirmod est et et sanctus et,
                kasd clita labore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
