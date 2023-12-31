import React, { useState, useEffect } from "react";
import job2 from "../Images/job2.jpeg";
import FontAwesome from "react-fontawesome";
import job3 from "../Images/job3.jpeg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
function JobsListing() {
  //////////////////
  const [fullTime, setFullTime] = useState("Full Time");
  const [partTime, setPartTime] = useState("Part Time");
  const [all, setAll] = useState(true);

  // console.log(type);
  // const [typeAll, setTypeAll] = useState(true);
  // const [typeFull, setTypeFull] = useState(false);
  // const [typePart, setTypePart] = useState(false);

  //////////////////
  const [jobData, setJobData] = useState([]);
  const [browse, setBrowse] = useState(false);
  const { id, categ } = useParams();
  console.log("id:", id);
  // console.log("category:", categ);

  useEffect(() => {
    if (categ) {
      axios
        .post("http://127.0.0.1:5000/jobportal/api/get/jobs/categ", {
          jobCategory: categ,
        })
        .then((res) => {
          console.log(res.data.data);
          setJobData(res.data.data);
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (all) {
      axios
        .get("http://127.0.0.1:5000/jobportal/api/get/jobs")
        .then((res) => {
          console.log(res.data);
          setJobData(res.data.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }

    AOS.init();
  }, []);

  if (!categ) {
    var handleAll = (e) => {
      axios
        .get("http://127.0.0.1:5000/jobportal/api/get/jobs")
        .then((res) => {
          console.log(res.data);
          setJobData(res.data.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    var handlePartTime = (e) => {
      setAll(false);

      axios
        .post("http://127.0.0.1:5000/jobportal/api/get/jobs/type", {
          jobType: partTime,
        })
        .then((res) => {
          console.log(res.data.data);
          setJobData(res.data.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    var handleFullTime = (e) => {
      setAll(false);
      axios
        .post("http://127.0.0.1:5000/jobportal/api/get/jobs/type", {
          jobType: fullTime,
        })
        .then((res) => {
          console.log(res.data.data);
          setJobData(res.data.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
  }

  const [click, setClick] = useState(false);
  // console.log(id);
  if (browse == false) {
    var listOfJobs = jobData.slice(-3);
    var latestJobs = listOfJobs.reverse();
  } else {
    var latestJobs = jobData.reverse();
  }

  return (
    <div className="container-fluid bg-white" style={{ marginTop: 84 }}>
      {(id || categ) && (
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
              Job List
            </h1>
            <div className="d-flex">
              <Link className="nav-link">Home </Link> /
              <Link className="nav-link">About</Link> /
              <Link className="nav-link">Pages</Link>
            </div>
          </div>
        </div>
      )}
      <h1
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-offset="100"
        className="text-center fw-bolder mb-4"
      >
        Job List
      </h1>
      {/* <br></br> */}
      {/* <br></br> */}
      {!categ ? (
        <div
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-offset="100"
          className="d-flex justify-content-center"
        >
          <ul className="nav nav-underline d-inline-flex justify-content-center align-items-center border-bottom mb-5">
            <li className="nav-item">
              <Link
                // href="#"
                className="nav-link  text-dark px-4"
                onClick={handleAll}
              >
                All
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                // href="#"
                className="nav-link text-dark"
                // onChange={}
                onClick={
                  //   // setType("Full Time");
                  handleFullTime
                }
              >
                Full Time
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark"
                // onChange={}
                onClick={
                  // setType("Part Time");
                  handlePartTime
                }
              >
                Part Time
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
      <div
        data-aos="fade-up"
        data-aos-delay="250"
        data-aos-offset="100"
        className="container border border-light"
      >
        {/* <div className="row  pt-3 px-2 shadow mb-4">
          <div className="col-lg-7 d-flex flex-row ">
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
          <div className="col-lg-4 d-flex flex-column align-items-end">
            <div className="d-flex align-items-center">
              <i
                className="fa fa-heart mx-3 p-2 bg-success rounded bg-opacity-25 border-success"
                style={{ color: "white", opacity: "100%" }}
                onMouseOver={(e) => {
                  e.target.style.color = "green";
                  e.target.style.opacity = "50%";
                }}
                onMouseLeave={(e) => {
                  if (click === false) {
                    e.target.style.color = "white";
                    e.target.style.opacity = "100%";
                  } else {
                    e.target.style.color = "green";
                    e.target.style.opacity = "100%";
                  }
                }}
                onClick={(e) => {
                  if (click === false) {
                    e.target.style.color = "green";
                    e.target.style.opacity = "100%";
                    setClick(true);
                  } else {
                    e.target.style.color = "green";
                    e.target.style.opacity = "50%";
                    setClick(false);
                  }
                }}
              ></i>
              <button className="btn btn-success">Apply Now</button>
            </div>
            <small className="mt-2">
              <i className="bi bi-calendar3 mx-3 text-success"></i>Date Line: 51
              Jan, 5555
            </small>
          </div>
        </div> */}
        {/* ////////////////////////////////// */}
        {latestJobs.map((item) => (
          <div className="row  pt-3 px-2 shadow mb-4" key={item.id}>
            <div className="col-lg-7 d-flex flex-row ">
              <div className="">
                <img
                  src={"http://127.0.0.1:5000/" + item.companyLogo}
                  style={{ width: "70px", height: "70px" }}
                ></img>
              </div>
              <div className="mx-4" style={{}}>
                <h3>{item.jobTitle}</h3>
                <div className="d-flex flex-row align-items-center fw-medium ">
                  <div className="d-flex flex-row me-3">
                    <i className="bi bi-geo-alt-fill me-1 text-success"></i>
                    <p>{item.jobLocation}</p>
                  </div>
                  <div className="d-flex flex-row me-3">
                    <i class="bi bi-stopwatch me-1 text-success"></i>
                    <p>{item.jobType}</p>
                  </div>
                  <div className="d-flex flex-row align-items-start justify-content-center">
                    <i class="bi bi-cash me-1 fs-5 d-flex pt-1 text-success fw-bolder"></i>
                    <p className="d-flex">{item.jobSalary}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-end">
              <div className="d-flex align-items-center">
                <i
                  className="fa fa-heart mx-3 p-2 bg-success rounded bg-opacity-25 border-success"
                  style={{ color: "white", opacity: "100%" }}
                  onMouseOver={(e) => {
                    e.target.style.color = "green";
                    e.target.style.opacity = "50%";
                  }}
                  onMouseLeave={(e) => {
                    if (click === false) {
                      e.target.style.color = "white";
                      e.target.style.opacity = "100%";
                    } else {
                      e.target.style.color = "green";
                      e.target.style.opacity = "100%";
                    }
                  }}
                  onClick={(e) => {
                    if (click === false) {
                      e.target.style.color = "green";
                      e.target.style.opacity = "100%";
                      setClick(true);
                    } else {
                      e.target.style.color = "green";
                      e.target.style.opacity = "50%";
                      setClick(false);
                    }
                  }}
                ></i>
                <Link to={"/jobdetail/" + item._id} className="btn btn-success">
                  Apply Now
                </Link>
              </div>
              <small className="mt-2">
                <i className="bi bi-calendar3 mx-3 text-success"></i>Date Line:
                {item.deadline.substring(3, 15)}
              </small>
            </div>
          </div>
        ))}
        {/* ////////////////////////////////// */}
      </div>
      <br></br>
      <div
        data-aos="fade-up"
        data-aos-delay="250"
        data-aos-offset="50"
        className="d-flex justify-content-center"
      >
        {id || categ ? (
          browse == false && (
            <button
              className="btn btn-success pt-3 pb-3"
              onClick={(e) => {
                setBrowse(true);
              }}
            >
              Browse more jobs
            </button>
          )
        ) : (
          <Link to={"/joblist/jobs"} className="btn btn-success pt-3 pb-3">
            Browse more jobs
          </Link>
        )}
      </div>
      <br></br> <br></br> <br></br>
    </div>
  );
}

export default JobsListing;
