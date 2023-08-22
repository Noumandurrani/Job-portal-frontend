import AOS from "aos";
import React, { useState, useEffect } from "react";
import job3 from "../Images/job3.jpeg";
import job2 from "../Images/job2.jpeg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import tick from "../Images/tick.png";
import { Modal, Nav } from "react-bootstrap";
function JobDetail() {
  const [jobDetail, setJobDetail] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  // const [applyJob, setApplyJob] = useState([]);
  const [userid, setUserid] = useState("");
  const navgate = useNavigate();
  const [showPage, setShowPage] = useState(false);
  const { id } = useParams();
  let jobList = "jobs";
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/jobportal/api/get/job/" + id)
      .then((res) => {
        console.log(res.data.data);
        setJobDetail(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
    //////////////////////////////////////////
    axios
      .post("http://127.0.0.1:5000/jobportal/api/get/applied/job", {
        jobId: id,
      })
      .then((res) => {
        // console.log(res.data.data);
        // setApplyJob(res.data.data);
        const app = res.data.data;
        console.log("app:", app);
        const jobdata = app.find(
          (item) => item.userId === localStorage.getItem("userId")
        );
        // setUserid(res.data.data.userId);
        console.log(jobdata.userId);
        // console.log("job:id:", res.data.data.userId);
        // setJobDetail(res.data.data);
        setUserid(jobdata.userId);
      })
      .catch((err) => {
        console.error(err);
      });
    AOS.init();
  }, []);
  const handleApplyJob = (e) => {
    e.preventDefault();
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("portfolio", portfolio);
    formData.append("resume", resume);
    formData.append("coverLetter", coverLetter);
    formData.append("userId", localStorage.getItem("userId"));
    formData.append("jobId", id);
    axios
      .post("http://127.0.0.1:5000/jobportal/api/apply/job", formData)
      .then((res) => {
        console.log(res.data.data);
        // setApplyJob(res.data.data);
        localStorage.setItem("userIdForApplyJob", res.data.data.userId);
        localStorage.setItem("jobIdForApplyJob", res.data.data.jobId);
        console.log("userid : ", res.data.data.userId);
        console.log("jobid", res.data.data.jobId);
        setShowPage(true);
        // navgate(`/`);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="container-fluid bg-white" style={{ marginTop: 84 }}>
      {/* <h3>JobDetail</h3> */}
      <Modal
        style={{
          zIndex: 100000000000,
          marginTop: "100px",
        }}
        className="modal"
        show={showPage}
        onHide={() => {
          setShowPage(false);
        }}
      >
        <Modal.Header>
          <Modal.Title>Applied sucessfully</Modal.Title>
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
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-offset="100"
            className="col-lg-8"
          >
            <div className="col-lg-12 d-flex flex-row mb-4">
              <div className="">
                <img
                  src={"http://127.0.0.1:5000/" + jobDetail.companyLogo}
                  style={{ width: "70px", height: "70px" }}
                ></img>
              </div>
              <div className="mx-4" style={{}}>
                <h3>{jobDetail.jobTitle}</h3>
                <div className="d-flex flex-row align-items-center fw-medium">
                  <div className="d-flex flex-row me-3">
                    <i className="bi bi-geo-alt-fill me-1 text-success"></i>
                    <p>{jobDetail.jobLocation}</p>
                  </div>
                  <div className="d-flex flex-row me-3">
                    <i class="bi bi-stopwatch me-1 text-success"></i>
                    <p>{jobDetail.jobType}</p>
                  </div>
                  <div className="d-flex flex-row align-items-start justify-content-center">
                    <i class="bi bi-cash me-1 fs-5 d-flex pt-1 text-success fw-bolder"></i>
                    <p className="d-flex">{jobDetail.jobSalary}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ////////// */}
            <div className="mb-4">
              <h4 className="fw-bolder">Job Description</h4>
              <p>{jobDetail.jobDescription}</p>
            </div>
            <div className="mb-4">
              <h4 className="fw-bolder">Responsibility</h4>
              <p>{jobDetail.jobRequirement}</p>
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
              <p>{jobDetail.Qaulification}</p>
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
              <form className="" onSubmit={handleApplyJob}>
                <div className="row g-3">
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Portfolio Website"
                      value={portfolio}
                      onChange={(e) => {
                        setPortfolio(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Your Name"
                      onChange={(e) => {
                        setResume(e.target.files[0]);
                      }}
                    ></input>
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      className="form-control"
                      style={{ height: 100 }}
                      placeholder="Cover Letter"
                      value={coverLetter}
                      onChange={(e) => {
                        setCoverLetter(e.target.value);
                      }}
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    {localStorage.getItem("isLoggedIn") &&
                    localStorage.getItem("role") == "candidate" ? (
                      userid == localStorage.getItem("userId") ? (
                        // &&
                        // localStorage.getItem("jobIdForApplyJob") == id
                        <abbr
                          title="applied"
                          className="btn shadow-0 bg-secondary form-control"
                          style={{
                            cursor: "not-allowed",
                            textDecoration: "none",
                          }}
                        >
                          Applied
                        </abbr>
                      ) : (
                        <button
                          type="submit"
                          className="btn btn-success form-control"
                        >
                          Apply Now
                        </button>
                      )
                    ) : (
                      <abbr
                        title="Login first"
                        className="btn shadow-0 bg-secondary form-control"
                        style={{
                          cursor: "not-allowed",
                          textDecoration: "none",
                        }}
                      >
                        Apply Now
                      </abbr>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-offset="200"
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
                Vacancy: {jobDetail.vacancy} Position
              </p>
              <p>
                <i className="fa fa-angle-right me-2 fw-bolder text-success"></i>
                Job Nature: {jobDetail.jobType}
              </p>
              <p>
                <i className="fa fa-angle-right me-2 fw-bolder text-success"></i>
                Salary: {jobDetail.jobSalary}
              </p>
              <p>
                <i className="fa fa-angle-right me-2 fw-bolder text-success"></i>
                Location: {jobDetail.jobLocation}
              </p>
              <p>
                <i className="fa fa-angle-right me-2 fw-bolder text-success"></i>
                Date Line: {jobDetail.deadline}
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="250"
              data-aos-offset="200"
              className="p-5 mb-4 rounded"
              style={{ backgroundColor: "#effdf5" }}
            >
              <h4 className="mb-4 fw-bolder">Company Detail</h4>
              <p>Name: {jobDetail.companyName}</p>
              <p>{jobDetail.companyDescription}</p>
              <p> Reachout: {jobDetail.companyWebsite}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
